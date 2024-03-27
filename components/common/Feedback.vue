<script setup lang="ts">
// Stores
// ...

// Composable
const message = useMessage();

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
            message: "Please input your name",
            trigger: "blur"
        },
        email: {
            required: true,
            message: "Please input your email",
            trigger: ["input", "blur"]
        },
        feedback: {
            required: true,
            message: "Please input your feedback",
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

// Hooks
// ...
</script>

<template>
    <div>
        <NButton color="#000000" @click="showModal = !showModal">
            <template #icon>
                <NaiveIcon name="ic:baseline-feedback" :size="16"/>
            </template>
            Feedback
        </NButton>

        <Teleport to="body">
            <NModal v-model:show="showModal" preset="card" title="Feedback" class="max-w-xl">
                <NForm
                    ref="formRef"
                    :label-width="80"
                    :model="formValue"
                    :rules="rules"
                    size="medium"
                    class="space-y-2"
                >
                    <NFormItem label="Name" path="user.name">
                        <NInput v-model:value="formValue.user.name" placeholder="Input Name"/>
                    </NFormItem>
                    <NFormItem label="Email" path="user.email">
                        <NInput v-model:value="formValue.user.email" placeholder="Input Email"/>
                    </NFormItem>
                    <NFormItem label="Feedback" path="user.feedback">
                        <NInput type="textarea" v-model:value="formValue.user.feedback"
                                 placeholder="Input Feedback"/>
                    </NFormItem>
                </NForm>
                <template #action>
                    <div class="flex justify-end space-x-2">
                        <NButton @click="showModal = false" color="#000000" ghost>
                            Close
                        </NButton>
                        <NButton @click.prevent="handleValidateClick" color="#000000">
                            Submit
                        </NButton>
                    </div>
                </template>
            </NModal>
        </Teleport>
    </div>
</template>

<style scoped>

</style>
