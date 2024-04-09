<script setup>
import {useEditor, EditorContent} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import {Placeholder} from "@tiptap/extension-placeholder";

// Stores
const evaluateStore = useEvaluateStore();

const {t} = useI18n();

// Composable
const editor = useEditor({
    content: evaluateStore.submission,
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: t("Enter your submission here to evaluate"),
            emptyNodeClass: "my-custom-is-empty-class",
            showOnlyWhenEditable: false
        })
    ]
});

// Events
const emit = defineEmits(["submit"]);

// Methods
const submit = () => {
    const content = editor.value.getHTML();
    evaluateStore.setSubmission(content);
    emit("submit");
};
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <NButton :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" size="small"
                     :ghost="!editor?.isActive('heading', { level: 1 })">
                <template #icon>
                    <NaiveIcon name="lucide:heading-1"/>
                </template>
            </NButton>

            <NButton :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" size="small"
                     :ghost="!editor?.isActive('heading', { level: 2 })">
                <template #icon>
                    <NaiveIcon name="lucide:heading-2"/>
                </template>
            </NButton>

            <NButton :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" size="small"
                     :ghost="!editor?.isActive('heading', { level: 3 })">
                <template #icon>
                    <NaiveIcon name="lucide:heading-3"/>
                </template>
            </NButton>
        </div>

        <NButton color="#059669" @click="submit">
            {{ $t("Evaluate") }}
        </NButton>
    </div>

    <EditorContent class="mt-4" :editor="editor"/>
</template>

<style scoped lang="scss">
:deep(.tiptap) {
    p {
        @apply text-base leading-7;
    }

    p.is-editor-empty:first-child::before {
        content: attr(data-placeholder);
        float: left;
        color: #adb5bd;
        pointer-events: none;
        height: 0;
    }
}
</style>
