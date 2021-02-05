<template>

	<!-- sidebar -->
	<div class="h-auto w-full md:w-48 md:min-h-screen pl-2" :style="{backgroundColor : color.primary}">
		<p class="text-2xl text-white font-semibold mb-4 pt-4 pl-2">Jaya Abadi</p>
			<div class="w-full">
				<p 	v-for="(link,index) in sidebar" @click="dropdownOpen(index)" 
					class="mb-1 pl-3 py-1 text-white font-semibold w-80 hover:bg-white hover:text-green-500 transition">
	                <a href="#">{{link.name}}</a>
	                <div v-show="link.child && link.active == true" 
	                	 class="pl-2 bg-green-600 text-white mt-2 w-2/5 rounded pt-2 pb-2">
	                	<p  v-for="child in link.child" ><a class="py-1 text-sm" :href="child.link" >{{child.name}}</a></p>
	                </div>
              	</p>
          	</div>
    </div>

</template>

<script>
	export default{
		data(){
			return{
				sidebar : [
		          {
		            name : "Dashboard",
		            link : "#",
		          },
		          {
		            name   : "Master",
		            active : false,
		            child  : [
		              {
		                name : "Barang",
		                link : "/#/1"
		              },
		              {
		                name : "Supplier",
		                link : "#"
		              },
		              {
		                name : "Gudang",
		                link : "#"
		              },
		              {
		                name : "Pelanggan",
		                link : "#"
		              },
		              {
		                name : "Pengguna",
		                link : "#"
		              }]
		          },
		          {
		            name   : "Pembelian",
		            active : false,
		            child  : [
		              {
		                name : "Purchase Order",
		                link : '#'
		              },
		              {
		                name : "Pembelian",
		                link : '#'
		              },
		              {
		                name : "Retur Beli",
		                link : '#'
		              },]
		          },
		          {
		            name     : "Penjualan",
		            active   : false,
		            child    : [
		              {
		                name : "Point of Sales",
		                link : "#"
		              },
		              {
		                name : "Sales Order",
		                link : "#"
		              },
		              {
		                name : "Invoice",
		                link : "#"
		              },
		              {
		                name : "Retur Jual",
		                link : "#"
		              }]
		          }
		      ],
			}
		},
		methods : {
			dropdownOpen : function(index){
				
				if(this.sidebar[index].active == false){
					this.sidebar[index].active = true;
					for(var i = 0; i < this.sidebar.length; i++){
						if(i == index){
							continue;
						}
						this.sidebar[i].active = false;
					}
				}
				else{
					this.sidebar[index].active = false;
				}
			}
		},
		props : ['color']
	}
</script>