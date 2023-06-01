<template>
    <layout>
        <template #content>
            <div>
                <router-link :to="{name: 'order1day'}" target="_blank">
                    カレンダーTOP-注文者：単一日選択用(2)
                </router-link><br>

                <router-link :to="{name: 'orderdays'}" target="_blank">
                            カレンダーTOP-注文者：複数日選択用(2_2)
                </router-link><br>

                <router-link :to="{name: 'calendartop'}" target="_blank">
                            カレンダーTOP-管理者：単一日選択用(2_3)
                </router-link><br>
            </div>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>