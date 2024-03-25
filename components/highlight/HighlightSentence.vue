<script setup>
const props = defineProps({
    sentence: {
        type: Object,
        required: true
    }
});

const tokens = computed(() => {
    const rawSentence = props.sentence.text;
    const sentence = rawSentence.replace(/<p>/g, "").replace(/<\/p>/g, "");
    const tempEl = document.createElement("div");
    tempEl.innerHTML = sentence;
    const tokens = [];
    tempEl.childNodes.forEach((node) => {
        if (node.nodeType === 3) {
            tokens.push(node.textContent);
        } else {
            const raw = /<span class="(.*?)" data-error="(.*?)">(.*)<\/span>/gm.exec(node.outerHTML);
            const id = Number(raw[2]);
            tokens.push({
                type: raw[1],
                id: id,
                text: raw[3]
            });
        }
    });
    return tokens;
});

const emit = defineEmits(["childUp"]);
const isShow = ref(false);
const showUp = () => {
    isShow.value = true;
    emit("childUp");
};
const childUp = () => {
    isShow.value = false;
    emit("childUp");
};
</script>

<template>
    <NPopover trigger="manual" style="width: 200px" :show="isShow">
        <template #trigger>
            <span :class="sentence?.type" @mouseleave="isShow = false" @mousemove.stop="showUp">
                <template v-for="token in tokens">
                    <span v-if="typeof token === 'string'" v-html="token"/>
                    <HighlightSentence v-else :sentence="token" @child-up="childUp"/>
                </template>
            </span>
        </template>
        <template #header>
            <n-tag :bordered="false" type="error" size="small">
                Word error #{{ sentence?.id }}
            </n-tag>
        </template>
        <span v-html="sentence.text"></span>
    </NPopover>
</template>

<style scoped>
.error_word {
    @apply inline-block border-b-2 border-red-400 text-red-400 p-0.5 cursor-pointer leading-none;
}

.error_sentence {
    @apply inline border-b-2 border-yellow-400 text-yellow-800 p-0.5 cursor-pointer leading-none;
}
</style>
