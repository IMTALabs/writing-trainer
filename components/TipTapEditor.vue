<template>
    <n-space size="small">
        <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" size="small"
                  :ghost="!editor?.isActive('heading', { level: 1 })">
            <template #icon>
                <NaiveIcon name="lucide:heading-1"/>
            </template>
        </n-button>

        <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" size="small"
                  :ghost="!editor?.isActive('heading', { level: 2 })">
            <template #icon>
                <NaiveIcon name="lucide:heading-2"/>
            </template>
        </n-button>

        <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" size="small"
                  :ghost="!editor?.isActive('heading', { level: 3 })">
            <template #icon>
                <NaiveIcon name="lucide:heading-3"/>
            </template>
        </n-button>

        <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" size="small"
                  :ghost="!editor?.isActive('heading', { level: 4 })">
            <template #icon>
                <NaiveIcon name="lucide:heading-4"/>
            </template>
        </n-button>

        <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" size="small"
                  :ghost="!editor?.isActive('heading', { level: 5 })">
            <template #icon>
                <NaiveIcon name="lucide:heading-5"/>
            </template>
        </n-button>

        <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" size="small"
                  :ghost="!editor?.isActive('heading', { level: 6 })">
            <template #icon>
                <NaiveIcon name="lucide:heading-6"/>
            </template>
        </n-button>
    </n-space>

    <editor-content class="mt-4" :editor="editor"/>

    <!--    <pre class="mt-8">{{ editor?.getHTML() }}</pre>-->
</template>

<script setup>
import {useEditor, EditorContent} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import {Placeholder} from "@tiptap/extension-placeholder";

const editor = useEditor({
    content: "",
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: 'Enter your submission',
            emptyNodeClass: 'my-custom-is-empty-class',
            showOnlyWhenEditable: false,
        })
    ]
});
</script>

<style scoped lang="scss">
:deep(.tiptap) p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}
:deep(.tiptap){
    height: 300px;
}
</style>