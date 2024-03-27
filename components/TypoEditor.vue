<template>
    <div class="flex justify-between">
        <div class="flex items-center gap-2">
            <n-space size="small">
                <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                          size="small"
                          :ghost="!editor?.isActive('heading', { level: 1 })">
                    <template #icon>
                        <NaiveIcon name="lucide:heading-1"/>
                    </template>
                </n-button>

                <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                          size="small"
                          :ghost="!editor?.isActive('heading', { level: 2 })">
                    <template #icon>
                        <NaiveIcon name="lucide:heading-2"/>
                    </template>
                </n-button>

                <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                          size="small"
                          :ghost="!editor?.isActive('heading', { level: 3 })">
                    <template #icon>
                        <NaiveIcon name="lucide:heading-3"/>
                    </template>
                </n-button>
            </n-space>
        </div>

    </div>

    <editor-content class="mt-4 text-base" :editor="editor"/>
    <div class="mt-4 text-xs text-gray-400 character-count" v-if="editor">
        <div class="flex justify-end gap-3">
            <NTag size="small"
                  :type="editor.storage.characterCount.characters() >= limitCharacters ? 'error' : 'default'">
                {{ editor.storage.characterCount.characters() }}/{{ limitCharacters }} {{  $t("characters") }}
            </NTag>
            <NTag size="small">
                {{ editor.storage.characterCount.words() }} {{ $t("words")}}
            </NTag>
        </div>

    </div>

</template>

<script setup>
import {useEditor, EditorContent} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import {Placeholder} from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import {useTypoStore} from "~/stores/typo.js";


const typoStore = useTypoStore();

const content = typoStore.submission;

const limitCharacters = 4000;

const {t} = useI18n();

const editor = useEditor({
    content: content,
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: t("Enter your submission here"),
            emptyNodeClass: "my-custom-is-empty-class",
            showOnlyWhenEditable: false
        }),
        CharacterCount.configure({
            limit: limitCharacters
        })
    ]

});

const getContent = () =>{
    typoStore.setSubmission(editor.value.getHTML());
    return editor.value.getHTML();
}

defineExpose({getContent})
</script>

<style scoped lang="scss">
:deep(.tiptap) p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}
</style>
