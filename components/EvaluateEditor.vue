<template>
    <div class="flex justify-between">
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

            <NButton :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" size="small"
                     :ghost="!editor?.isActive('heading', { level: 4 })">
                <template #icon>
                    <NaiveIcon name="lucide:heading-4"/>
                </template>
            </NButton>

            <NButton :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" size="small"
                     :ghost="!editor?.isActive('heading', { level: 5 })">
                <template #icon>
                    <NaiveIcon name="lucide:heading-5"/>
                </template>
            </NButton>

            <NButton :color="'#000000'" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" size="small"
                     :ghost="!editor?.isActive('heading', { level: 6 })">
                <template #icon>
                    <NaiveIcon name="lucide:heading-6"/>
                </template>
            </NButton>
        </div>

        <NButton color="#000000" size="small" @click="submit">
            Evaluate
        </NButton>
    </div>

    <EditorContent class="mt-4" :editor="editor"/>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";

const editor = useEditor({
    content: "Nowadays, people contend that a large portion of government funding for performing arts, namely music and theater, is akin to spending on the arts when it should instead be applied to improving the services provided to people. However, I believe that art should be regarded as a fundamental component of society because it allows artists to express their creative side while also preserving the culture and history of the country.\n" +
        "\n" +
        "First, creative people employ their talents to adorn a straightforward item that can transform a sparse space. Paintings, sculptures, and sketches add attractiveness to the environment, which improves many people’s dispositions and behaviors. They have significantly aided in the restoration of the ancient artwork and forefathers’ history. In addition, there are some people who have a strong desire to travel to museums and art galleries in order to admire the magnificent artistic creations that are frequently supported by governmental bodies.\n" +
        "\n" +
        "There are a number of other advantages to supporting the fine arts since it provides young people with a similar passion with a great opportunity to succeed in this sector and make a fortune for themselves. Some youngsters who lack academic talent nevertheless find comfort and calm in working their magic on canvases. Furthermore, this sport has been accepted as a recreational activity for people who are battling with their mental health in many states. Indulging in these activities while getting a break from their monotonous routine is something that many adults like doing on the weekends.\n" +
        "\n" +
        "In conclusion, the higher authorities should support public services and other initiatives with the same zeal and investment.",
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: "Enter your submission",
            emptyNodeClass: "my-custom-is-empty-class",
            showOnlyWhenEditable: false
        })
    ]
});

const emit = defineEmits(["submit"]);

const submit = () => {
    const content = editor.value.getHTML();
    emit("submit", content);
};
</script>

<style scoped lang="scss">
:deep(.tiptap) {
    p {
        @apply leading-6;
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
