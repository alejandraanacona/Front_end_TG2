<template>
    <router-link :to="to" class="link" :class="{ active: isActive }">
        <i class="icon" :class="icon" />
        <transition name="fade">
            <span v-if="!collapsed">
                <slot />
            </span>
        </transition>
    </router-link>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { collapsed } from './state';

export default {
    props: {
        to: { type: String, required: true },
        icon: { type: String, required: true }
    },
    setup(props) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return { isActive, collapsed }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to{
    opacity: 0;
}
.link {
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 30px;

    cursor: pointer;
    position: relative;
    font-weight: 500;
    user-select: none;
    font-size: large;

    margin: 0.1em 0.1;
    padding: 0.5em;
    border-radius: 2.5em;
    height: 1.5em;

    color: rgba(255, 252, 252, 0.696);
    text-decoration: none;

}

.link:hover {
    color:white;
}

.link.active {
    color:white;
   
}

.link.icon {
    flex-shrink: 0;
    width: 50px;
    margin-right: 20px;
}

.link.active:before{
    content: '';
    width: 4px;
    height: 100%;
    background-color: white;
    position: absolute;
    top: 5%;
    left:-1px;
}
</style>