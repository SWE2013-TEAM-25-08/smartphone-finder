<script lang="ts">
    import type {Smartphone} from "$lib/types/Smartphone";

    let { data } = $props();
    let phone: Smartphone = $derived(data.phone)

    console.log(phone)
</script>

