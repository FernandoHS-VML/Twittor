function actualizaCacheDinamico(cacheDynamic, request, response ){
	if(response.ok){
		return caches.open(cacheDynamic).then(cache =>{
			cache.put(request,response.clone());
		})
		return response.clone();
	} else{
		return response;
	}
}