<script setup lang="ts">
// Stores
// ...

// Composable
const message = useMessage();
const { t } = useI18n();

// Props
//...

// Data
const showModal = ref(false);
const formRef = ref(null);
const formValue = ref({
    user: {
        name: "",
        email: "",
        feedback: ""
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

// Computed
// ...

// Event
// ...

// Methods
const handleValidateClick = () => {
    formRef.value?.validate((errors) => {
        if (!errors) {
            message.success("Thanks for your feedback!");
        } else {
            console.log(errors);
            message.error("Invalid");
        }
    });
};

const inputThemeOverrides = {
    borderHover: "1px solid #000000",
    borderFocus: "1px solid #000000",
    boxShadowFocus: "0 0 0 2px rgba(0, 0, 0, 0.2)",
    textColor: "#000000"
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
                <NForm
                    ref="formRef"
                    :label-width="80"
                    :model="formValue"
                    :rules="rules"
                    size="medium"
                    class="space-y-3"
                >
                    <NFormItem :label="$t('Name')" path="user.name">
                        <NInput :theme-overrides="inputThemeOverrides" v-model:value="formValue.user.name" :placeholder="$t('Input Name')"/>
                    </NFormItem>
                    <NFormItem label="Email" path="user.email">
                        <NInput :theme-overrides="inputThemeOverrides" v-model:value="formValue.user.email" :placeholder="$t('Input Email')"/>
                    </NFormItem>
                    <NFormItem :label="$t('Feedback')" path="user.feedback">
                        <NInput :theme-overrides="inputThemeOverrides" type="textarea" v-model:value="formValue.user.feedback"
                                 :placeholder="$t('Input Feedback')"/>
                    </NFormItem>
                </NForm>
                <template #action>
                    <div class="flex justify-end space-x-2">
                        <NButton @click="showModal = false" color="#000000" ghost>
                            {{ $t("Close")}}
                        </NButton>
                        <NButton @click.prevent="handleValidateClick" color="#000000">
                            {{ $t("Submit") }}
                        </NButton>
                    </div>
                </template>
            </NModal>
        </Teleport>
    </div>
</template>

<style scoped>

</style>
