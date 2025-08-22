<template>
    <article class="component healthcare-showcase">
        <div class="wrapper">
            <slot></slot>
        </div>
    </article>
</template>

<script setup>
</script>

<style scoped>
.component {
    min-height: 350px;
    display: flex;
}

.wrapper {
    background-color: transparent;
    width: 100%;
    border-radius: 45px;
    padding: 0;
    display: flex;
    gap: 30px;
    justify-content: space-between;
}

/* RESPONSIVE */
@media screen and (max-width: 920px) {
    .wrapper {
        flex-direction: column;
        padding: 0;
        gap: 30px;
    }
}

@media screen and (max-width: 420px) {
    .wrapper {
        padding: 0;
        gap: 20px;
    }
}
</style>
