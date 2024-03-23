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

const limitCharacters = 1000;

const editor = useEditor({
    content: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.\n" +
        "\n" +
        "There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.\n" +
        "\n",
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