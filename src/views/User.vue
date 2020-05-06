<template>
	<div>
		{{ kata }}
		<br>
		<button @click="showAlert">Klik</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		/*data2 untuk di tampilkan atau disimpan*/
		data() {
			return {
				kata: "Hello world"
			}
		},
		/*terpanggil saat page/component dijalankan di browser*/
		created() {
			this.showConsoleLog();
		},
		/*method2/function2 yang akan dipakai nantinya*/
		methods: {
			showAlert() {
				alert('ini alert');
			},
			showConsoleLog() {
				console.log('ini console log');
			}
		}
	}
</script>