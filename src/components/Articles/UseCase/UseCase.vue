<template>
    <article class="component use-case">
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
    background-color: var(--secondary-color);
    width: 100%;
    border-radius: 45px;
    padding: 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    gap: 40px 120px;
    position: relative;
    /* Bright floating separators: 2 vertical, 1 horizontal (not touching edges) */
    background-image:
        linear-gradient(to right, #ffffff, #ffffff),
        linear-gradient(to right, #ffffff, #ffffff),
        linear-gradient(to bottom, #ffffff, #ffffff);
    /* inset 60px from each edge (matches padding) */
    background-size: 1px calc(100% - 120px), 1px calc(100% - 120px), calc(100% - 120px) 1px;
    /* verticals centered in column gaps; horizontal centered between rows */
    background-position:
        calc(((100% - 240px) / 3) + 60px) 60px,
        calc((2 * ((100% - 240px) / 3)) + 180px) 60px,
        60px calc(50%);
    background-repeat: no-repeat;
}

/* RESPONSIVE */
@media screen and (max-width: 920px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        background-image: none;
    }
}


@media screen and (max-width: 420px) {
    .wrapper {
    padding: 50px 30px;
}
}
</style>