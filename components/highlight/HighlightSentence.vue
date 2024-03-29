<script setup>
// Props
const props = defineProps({
    sentence: {
        type: Object,
        required: true
    }
});

// Computed
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

// Events
const emit = defineEmits(["childUp"]);

// Data
const isShow = ref(false);

// Methods
const showUp = () => {
    isShow.value = true;
    emit("childUp");
};
const childUp = () => {
    isShow.value = false;
    emit("childUp");
};

// Stores
const evaluateStore = useEvaluateStore();
</script>

<template>
    <NPopover trigger="manual" style="max-width: 360px" :show="isShow" :show-arrow="false">
        <template #trigger>
            <span :class="sentence?.type" @mouseleave="isShow = false" @mousemove.stop="showUp"
                  @click.stop="evaluateStore.setHighlighting([`error-${sentence?.id}`])">
                <template v-for="token in tokens">
                    <span v-if="typeof token === 'string'" v-html="token"/>
                    <HighlightSentence v-else :sentence="token" @child-up="childUp"/>
                </template>
            </span>
        </template>
        <template #header>
            <n-tag :bordered="false" type="error" size="small">
                {{ sentence.type === "error_word" ? "Word" : "Sentence" }} error #{{ sentence?.id }}
            </n-tag>
        </template>
        <div v-for="detail in evaluateStore.badParts.find((bp) => bp.id === sentence?.id)?.details"
             class="flex flex-col border-b py-2 space-y-1 last:border-none">
            <span><span class="font-bold">{{ $t("Issue") }}:</span> {{ detail.issue }}</span>
            <span><span class="font-bold">{{ $t("Idea") }}:</span> {{ detail.idea }}</span>
        </div>
    </NPopover>
</template>

<style scoped>
.error_word {
    @apply inline cursor-pointer border-b-2 border-red-400 leading-none text-red-400 p-0.5;
}

.error_sentence {
    @apply inline cursor-pointer border-b-2 border-yellow-400 leading-none text-yellow-800 p-0.5;
}
</style>
