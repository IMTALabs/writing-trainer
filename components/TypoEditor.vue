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

                <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                          size="small"
                          :ghost="!editor?.isActive('heading', { level: 4 })">
                    <template #icon>
                        <NaiveIcon name="lucide:heading-4"/>
                    </template>
                </n-button>

                <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                          size="small"
                          :ghost="!editor?.isActive('heading', { level: 5 })">
                    <template #icon>
                        <NaiveIcon name="lucide:heading-5"/>
                    </template>
                </n-button>

                <n-button :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                          size="small"
                          :ghost="!editor?.isActive('heading', { level: 6 })">
                    <template #icon>
                        <NaiveIcon name="lucide:heading-6"/>
                    </template>
                </n-button>
            </n-space>
        </div>
        <NButton color="#000000" size="small" @click="submitContent">
            Evaluate
        </NButton>
    </div>

    <editor-content class="mt-4" :editor="editor"/>
    <div class="character-count mt-4 text-xs text-gray-400" v-if="editor">
        <div class="flex gap-3 justify-end">
            <NTag size="small"
                  :type="editor.storage.characterCount.characters() >= limitCharacters ? 'error' : 'default'">
                {{ editor.storage.characterCount.characters() }}/{{ limitCharacters }} characters
            </NTag>
            <NTag size="small">
                {{ editor.storage.characterCount.words() }} words
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

const limitCharacters = 1000;

const editor = useEditor({
    content: content,
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: "Enter your submission",
            emptyNodeClass: "my-custom-is-empty-class",
            showOnlyWhenEditable: false
        }),
        CharacterCount.configure({
            limit: limitCharacters
        })
    ]

});

const emit = defineEmits(["submit"]);
const submitContent = () => {
    const content = editor.value.getHTML();
    emit('submit', content);
}

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