<script setup>
// Props
const props = defineProps({
    paragraph: {
        type: String,
        required: true
    }
});

// Data
const sentences = ref([]);

// Mounted
onMounted(() => {
    if (props.paragraph === "<p></p>") {
        sentences.value = ["<br>"];
    } else {
        const paragraph = props.paragraph.replace(/<p>/g, "").replace(/<p/g, "").replace(/<\/p>/g, "");
        // This statement must be called in mounted hook, because it uses document.createElement - which is not available in setup
        const tempEl = document.createElement("div");
        tempEl.innerHTML = paragraph;

        tempEl.childNodes.forEach((node) => {
            if (node.nodeType === 3) {
                sentences.value.push(node.textContent);
            } else {
                const raw = /<span class="(.*?)" data-error="(.*?)">(.*)<\/span>/gm.exec(node.outerHTML);
                const id = Number(raw[2]);
                sentences.value.push({
                    type: raw[1],
                    id: id,
                    text: raw[3]
                });
            }
        });
    }
});
</script>

<template>
    <div class="paragraph leading-7 text-base">
        <template v-for="sentence in sentences">
            <br v-if="sentence === '<br>'">
            <span v-else-if="typeof sentence === 'string'">{{ sentence }}</span>
            <HighlightSentence v-else :sentence="sentence"/>
        </template>
    </div>
</template>
