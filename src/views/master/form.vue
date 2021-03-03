<template>
	<div class="mb-4">
		<p class="text-2xl font-semibold mt-8">Tambahkan Barang Baru</p>
		<div v-for="input in input_group" class="mt-4">
			<p class="mb-1 mt-0">{{input.label}}</p>

			<!-- text input -->
			<input v-model="input.value" class="border w-full py-3 px-3 rounded-md" type="text" v-if="input.type == 'text'" :placeholder="input.placeholder" >

			<!-- select input -->
			<select class="border w-full py-3 px-3 rounded-md" v-if="input.type == 'select'" v-model="input.value">
				<option value="" disabled>Silahkan pilih disini</option>
				<option v-for="item in input.option" :value="item.value">{{item.label}}</option>
			</select>

			<!-- multiple select box -->
			<div v-if="input.type == 'custom_select'">
				<p v-if="input.value.length == 0" class="p-3 bg-red-100 text-red-500 font-semibold rounded-md pl-5">Kotak kosong</p>
				<div v-if="input.value.length > 0" v-for="(item,index) in input.value">
					<p class="p-3 bg-gray-100 text-gray-500 font-semibold rounded-md pl-5 mt-1"><u class="mr-3 font-normal text-red-500" @click="deleteFromCustom(input, index)">hapus</u>{{customFieldToString(input.custom, item)}}</p>
				</div>
				
				<div class="grid grid-flow-col gap-2 mt-2">
					<div v-for="custom in input.custom">
						<input class="border w-full py-3 px-3 rounded-md" type="text" :placeholder="custom.placeholder" v-if="custom.type == 'text'" v-model="custom.value">
					</div>
					<p @click="addToCustomSelect(input)" class="py-3 px-3 rounded-md bg-green-100 text-green-700 font-semibold text-center w-24">Tambah</p>
				</div>
			</div>

		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				input_group : [
					{
						label  : "Kategori Barang",
						type   : "select",
						value  : "",
						option : [
							{
								value : "PRTK",
								label : "Pertukangan"
							},
							{
								value : "CAT",
								label : "Cat"
							},
						]
					},
					{
						label : "Merek",
						type  : "text",
						placeholder : "Masukan Nama Merek",
						value : ""
					},
					{
						label : "Nama Barang",
						type  : "text",
						placeholder : "Masukan Nama Barang",
						value : ""
					},
					{
						label  : "Pilih Varian",
						type   : "custom_select",
						value  : [],
						custom : [
							{
								name : "varian",
								type : "text",
								value : "",
								placeholder : "Nama Varian"
							},
							{
								name : "harga",
								type : "text",
								value : "",
								placeholder : "Harga Varian"
							}
						]
					},
				]
			}
		},
		methods : {
			addToCustomSelect : function(input){
				var i = 0;
				var data = {};				
				for(i=0; i < input.custom.length; i++){
					data[input.custom[i].name] = input.custom[i].value;
					input.custom[i].value = "";
				}
				alert("Data berhasil ditambahkan");
				input.value.push(data);
			},
			deleteFromCustom : function(input, index) {
				input.value.splice(index, index+1);
				alert("Data berhasil dihapus");
			},
			customFieldToString : function(input_custom, input_value) {
				var i = 0;
				var result = "";
				console.log(input_custom);
				console.log(input_value);
				
				for(i = 0;i < input_custom.length;i++){
					result += input_custom[i].name + ": " + input_value[input_custom[i].name] + "; ";
				}		

				return result;
			}
		}
	}
</script>