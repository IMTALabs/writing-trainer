<script setup lang="ts">
// Stores
// ...

// Composable
const message = useMessage();
const { t } = useI18n();
const supabase = useSupabaseClient();

// Props
//...

// Data
const showModal = ref(false);
const formRef = ref(null);
const requestRef = ref(null);
const isSaving = ref(false);

const formValue = ref({
    user: {
        name: "",
        email: "",
        feedback: ""
    }
});
const requestValue = ref({
    user: {
        name: "quanph",
        email: "ok@gmail.com",
        description: "Vocab trainer",
        sampleUrl: "https://vocabulary.com",
        images: []
    }
});

const rules = ref({
    user: {
        name: {
            required: true,
            message: t("Please input your name"),
            trigger: "blur"
        },
        email: {
            required: true,
            validator(rule, value) {
                if (!value) {
                    return new Error(t("Please input your email"));
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
                    return new Error(t("Invalid email"));
                }
                return true;
            },
            trigger: ["input", "blur"]
        },
        feedback: {
            required: true,
            message: t("Please input your feedback"),
            trigger: "blur"
        }
    }
});

const inputThemeOverrides = {
    borderHover: "1px solid #000000",
    borderFocus: "1px solid #000000",
    boxShadowFocus: "none",
    textColor: "#000000",
    caretColor: "#000000"
};

// Computed
// ...

// Event
// ...

// Methods
const submitFeedback = () => {
    formRef.value?.validate(async (errors) => {
        if (!errors) {
            isSaving.value = true;
            const { data, error } = await supabase
                .from("feedbacks")
                .insert([
                    formValue.value.user
                ])
                .select();
            if (error) {
                message.error(error.message);
            } else {
                message.success("Thanks for your feedback!");
            }
            formValue.value.user.name = "";
            formValue.value.user.email = "";
            formValue.value.user.feedback = "";
            isSaving.value = false;
        } else {
            message.error("Invalid");
        }
    });
};

const submitRequest = () => {
    requestRef.value?.validate((errors) => {
        if (!errors) {
            message.success("Thanks for your feedback!");
        } else {
            message.error("Invalid");
        }
    });
};

const createThumbnailUrl = (file) => {
    if (!file) return "https://img.icons8.com/hatch/100/image-not-avialable.png";
    return URL.createObjectURL(file);
};

// Hooks
// ...
</script>

<template>
    <div>
        <NButton color="#000000" @click="showModal = !showModal">
            <template #icon>
                <NaiveIcon name="ic:baseline-feedback" :size="16"/>
            </template>
            {{ $t("Feedback") }}
        </NButton>

        <Teleport to="body">
            <NModal v-model:show="showModal" preset="card" :title="$t('Feedback')" class="max-w-xl">
                <NTabs type="segment" animated default-value="feature-request">
                    <NTabPane name="feedback" tab="Feedback">
                        <NForm
                            ref="formRef"
                            :label-width="80"
                            :model="formValue"
                            :rules="rules"
                            size="medium"
                            class="space-y-3"
                        >
                            <NFormItem :label="$t('Name')" path="user.name">
                                <NInput :theme-overrides="inputThemeOverrides" v-model:value="formValue.user.name"
                                        :placeholder="$t('Input Name')"/>
                            </NFormItem>
                            <NFormItem label="Email" path="user.email">
                                <NInput :theme-overrides="inputThemeOverrides" v-model:value="formValue.user.email"
                                        :placeholder="$t('Input Email')"/>
                            </NFormItem>
                            <NFormItem :label="$t('Feedback')" path="user.feedback">
                                <NInput :theme-overrides="inputThemeOverrides" type="textarea"
                                        v-model:value="formValue.user.feedback"
                                        :placeholder="$t('Input Feedback')"/>
                            </NFormItem>
                        </NForm>

                        <div class="flex justify-end space-x-2 mt-4">
                            <NButton @click="showModal = false" color="#000000" ghost>
                                {{ $t("Close") }}
                            </NButton>
                            <NButton @click.prevent="submitFeedback" color="#000000" :disabled="isSaving">
                                {{ $t("Submit") }}
                            </NButton>
                        </div>
                    </NTabPane>
                    <NTabPane name="feature-request" tab="Feature request">
                        <NForm
                            ref="requestRef"
                            :label-width="80"
                            :model="requestValue"
                            :rules="rules"
                            size="medium"
                            class="space-y-3"
                        >
                            <NFormItem :label="$t('Name')" path="user.name">
                                <NInput :theme-overrides="inputThemeOverrides" v-model:value="requestValue.user.name"
                                        :placeholder="$t('Input Name')"/>
                            </NFormItem>
                            <NFormItem label="Email" path="user.email">
                                <NInput :theme-overrides="inputThemeOverrides" v-model:value="requestValue.user.email"
                                        :placeholder="$t('Input Email')"/>
                            </NFormItem>
                            <NFormItem :label="$t('Description')" path="user.description">
                                <NInput :theme-overrides="inputThemeOverrides" type="textarea"
                                        v-model:value="requestValue.user.description"
                                        :placeholder="$t('Input Feedback')"/>
                            </NFormItem>
                            <NFormItem :label="$t('Sample URL')" path="user.sampleUrl">
                                <NInput :theme-overrides="inputThemeOverrides"
                                        v-model:value="requestValue.user.sampleUrl"
                                        :placeholder="$t('Input Sample URL')"/>
                            </NFormItem>
                            <NFormItem :label="$t('Images')" path="user.images">
                                <NUpload
                                    :default-file-list="requestValue.user.images"
                                    list-type="image"
                                    :create-thumbnail-url="createThumbnailUrl"
                                >
                                    <NButton color="#000000" ghost>Upload</NButton>
                                </NUpload>
                            </NFormItem>
                        </NForm>

                        <div class="flex justify-end space-x-2 mt-4">
                            <NButton @click="showModal = false" color="#000000" ghost>
                                {{ $t("Close") }}
                            </NButton>
                            <NButton @click.prevent="submitRequest" color="#000000" :disabled="isSaving">
                                {{ $t("Submit") }}
                            </NButton>
                        </div>
                    </NTabPane>
                </NTabs>
            </NModal>
        </Teleport>
    </div>
</template>

<style scoped>

</style>
