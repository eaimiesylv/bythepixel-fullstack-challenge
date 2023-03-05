<template>
  <div>
        <nav>
            <ul class="navbar-nav">	
						
				
						<li class="nav-item ">
                            <RouterLink to="/">Weather Detail</RouterLink>
						</li>

                        <li class="nav-item">
                            <RouterLink to="/users">Users</RouterLink>
						</li>
                        
                        <li class="nav-item">
                            <RouterLink to="/about">About</RouterLink>
						</li>
				 
			</ul>
          
           
            
        </nav>
        <main>
            <slot></slot>
        </main>

  </div>





</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
 div{
  
  
  display:grid;
  grid-template-rows:auto min-content;
  grid-template-columns:auto 1fr;
  height:100vh

 
}
nav{
    background:white;
	padding:1em;
     
}
main{
    background:white;
    margin:0em 1em 1em 1em;
	padding:1em;
    
 
     
     
}
</style>
