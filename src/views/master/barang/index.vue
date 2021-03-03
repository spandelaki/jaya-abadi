	<template>	
		<div>
			<div class="relative flex">
				<div class="w-full md:w-1/2">
					<p class="font-bold text-3xl mt-6 mb-1">Daftar Barang</p>
					<p class="mb-7 text-gray-600">Kelola daftar barang disini</p>
				</div>				
			</div>
		
			<div class="rounded-md shadow">
				<div class="flex px-5 pt-4 pb-4">
					<div class="w-full md:w-1/2">
						<input type="text" v-model="search_bar" class="text-sm border rounded-full pl-4 w-full md:w-56 py-2" placeholder="Cari Barang Disini">
					</div>
					<div class="w-full md:w-1/2 relative">
						<p @click="goToAddOrEdit()" class="absolute right-0 top-1/2 -translate-y-2/4 transform bg-green-600 py-2 px-5 pointer rounded-full text-sm hover:opacity-80 transition text-white font-semibold">+ Tambah Barang</p>
					</div>
				</div>
				<Tables :table_head="table_head" :table_body="filteredData"></Tables>
			</div>
			
		</div>
	</template>

	<script>
		
		import Tables from '../../../components/table.vue';

		export default{
			data(){
				return{
					search_bar : "",
					table_head : ["KODE", "KATEGORI", "NAMA", "MERK", "VARIAN", "HARGA", "STOK TOKO", "STOK GUDANG", "AKSI"],
					table_body : [
						[
							{ type : "text", text : "G" },				// id
							{ type : "badge", text : "Pertukangan" },   // category
							{ type : "text", text : "Paku Beton" },     // name
							{ type : "text", text : "Umum" },           // brand
							{ type : "text", text : "2cm" },            // variant 
							{ type : "price", text : "2000" },          // price
							{ type : "text", text : "300" },            // stock at store
							{ type : "text", text : "400" }             // stock at warehouse
						],
						[
							{ type : "text", text : "G" },
							{ type : "badge", text : "Pertukangan" },
							{ type : "text", text : "Paku Payung" },
							{ type : "text", text : "Umum" },
							{ type : "text", text : "2cm" },
							{ type : "price", text : "2000" },
							{ type : "text", text : "200" },
							{ type : "text", text : "400" }
						],
						[
							{ type : "text", text : "G" },
							{ type : "badge", text : "Cat" },
							{ type : "text", text : "Cat Indoor" },
							{ type : "text", text : "Dulux" },
							{ type : "text", text : "Putih" },
							{ type : "price", text : "50000" },
							{ type : "text", text : "8" },
							{ type : "text", text : "20" }
						]
						,[
							{ type : "text", text : "G" },
							{ type : "badge", text : "Cat" },
							{ type : "text", text : "Cat Outdoor" },
							{ type : "text", text : "Nippon Paint" },
							{ type : "text", text : "Putih" },
							{ type : "price", text : "100000" },
							{ type : "text", text : "5" },
							{ type : "text", text : "10" }
						]],
				}
			},
			computed : {
				filteredData(){
					return this.table_body.filter(tableData => {
						return tableData[2].text.toLowerCase().includes(this.search_bar.toLowerCase());
					});
				},
			},
			methods : {
				goToAddOrEdit : function() {
					this.$router.replace("/master/barang/baru");
				}
			},
			created(){

			},

			components : {
				Tables
			}
		}

	</script>