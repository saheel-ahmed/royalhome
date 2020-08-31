var OurTeam = {
    template: `
    <div>
    <header-layout ></header-layout>
    <div class="container mt-4">
    <div class="row">
    <div class="col-md-12 bt-content-wrap right-bt-content-wrap">
<div class="agents-list-view">
<div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<router-link :to="'/agent/elena/'">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2020/07/Elena.jpg" class="img-fluid wp-post-image" alt="elena-royalhome" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Elena.jpg 700w, https://royalhome.ae/wp-content/uploads/2020/07/Elena-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/07/Elena-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/07/Elena-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2020/07/Elena-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			</a>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><router-link :to="'/agent/elena/'">Elena Timchenko</router-link></h2>
</div>

<p class="agent-list-position"> Sales Director / Managing Partner			
at Royal Home Real Estate		
</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 50 675 7593</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:elena.t@royalhome.ae">elena.t@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<router-link :to="'/agent/elena/'"><strong>View Listings</strong></router-link>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<router-link :to="'/agent/tsvety/'">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2020/07/Tsvety.jpg" class="img-fluid wp-post-image" alt="Tsvety-Royalhome" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Tsvety.jpg 700w, https://royalhome.ae/wp-content/uploads/2020/07/Tsvety-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/07/Tsvety-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/07/Tsvety-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2020/07/Tsvety-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			
</router-link>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><router-link :to="'/agent/tsvety/'"><router-link :to="'/agent/tsvety/'">Tsvety Borisova</router-link></h2>
</div>

<p class="agent-list-position"> Sr. Property Consultant			
at	Royal Home Real Estate		
</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 50 253 2367</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:tsvety.b@royalhome.ae">tsvety.b@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<router-link :to="'/agent/tsvety/'"><strong>View Listings</strong></router-link>
</div>
</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<router-link :to="'/agent/yelena/'">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2020/07/Yelena.jpg" class="img-fluid wp-post-image" alt="" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Yelena.jpg 700w, https://royalhome.ae/wp-content/uploads/2020/07/Yelena-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/07/Yelena-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/07/Yelena-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2020/07/Yelena-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			
</router-link>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><router-link :to="'/agent/yelena/'">Yelena Monakhova</router-link></h2>
</div>

<p class="agent-list-position"> Sr. Property Consultant	at Royal Home Real Estate		
</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 50 121 0253</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:m.elena@royalhome.ae">m.elena@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">

<router-link :to="'/agent/yelena/'"><strong>View Listings</strong></router-link>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<router-link :to="'/agent/oxana/'">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2016/02/Oxana-pic.jpg" class="img-fluid wp-post-image" alt="" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2016/02/Oxana-pic.jpg 700w, https://royalhome.ae/wp-content/uploads/2016/02/Oxana-pic-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2016/02/Oxana-pic-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2016/02/Oxana-pic-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2016/02/Oxana-pic-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			
</router-link>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><router-link :to="'/agent/oxana/'">Oxana Plyusnina</router-link></h2>
</div>

<p class="agent-list-position"> Sr. Property Consultant at Royal Home Real Estate		
</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 50 981 0928</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:oxana.p@royalhome.ae">oxana.p@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">

<router-link :to="'/agent/oxana/'"><strong>View Listings</strong></router-link>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<router-link :to="'/agent/royalhome/'">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2020/07/Anastasiya.jpg" class="img-fluid wp-post-image" alt="Anastasiya-Royalhome" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Anastasiya.jpg 700w, https://royalhome.ae/wp-content/uploads/2020/07/Anastasiya-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/07/Anastasiya-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/07/Anastasiya-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2020/07/Anastasiya-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			
</router-link>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><router-link :to="'/agent/royalhome/'">Anastasiya Kouzan</router-link></h2>
</div>

<p class="agent-list-position"> Property Consultant at Royal Home Real Estate		
</a>

</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 54 4949477</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:anastasiya.k@royalhome.ae">anastasiya.k@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<router-link :to="'/agent/royalhome/'"><strong>View Listings</strong></router-link>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<router-link :to="'/agent/alyjan/'">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2020/07/Aly.jpg" class="img-fluid wp-post-image" alt="Alyjan-Royalhome" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Aly.jpg 700w, https://royalhome.ae/wp-content/uploads/2020/07/Aly-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/07/Aly-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/07/Aly-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2020/07/Aly-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			
</router-link>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><router-link :to="'/agent/alyjan/'">Alyjan Durdalyyev</router-link></h2>
</div>

<p class="agent-list-position"> Property Consultant			
at Royal Home Real Estate</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 50 777 0806</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:aly@royalhome.ae">aly@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<router-link :to="'/agent/alyjan/'"><strong>View Listings</strong></router-link>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<a href="https://royalhome.ae/agent/nabila-diguer/">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2020/08/Nabila2.jpg" class="img-fluid wp-post-image" alt="" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/08/Nabila2.jpg 700w, https://royalhome.ae/wp-content/uploads/2020/08/Nabila2-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/08/Nabila2-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/08/Nabila2-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2020/08/Nabila2-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			</a>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><a href="https://royalhome.ae/agent/nabila-diguer/">Nabila Diguer</a></h2>
</div>

<p class="agent-list-position"> Property Consultant			
at		<a href="https://royalhome.ae/agency/royal-home-real-estate/">
Royal Home Real Estate		
</a>

</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 54 771 5500</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:nabila.d@royalhome.ae">nabila.d@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<div class="agent-social-media flex-grow-1">


<span>
<a class="btn-facebook" target="_blank" href="https://www.facebook.com/RoyalHomeDubai/?ref=hl">
<i class="houzez-icon icon-social-media-facebook mr-2"></i>
</a>
</span>

<span>
<a class="btn-instagram" target="_blank" href="https://www.instagram.com/royalhome_uae/">
<i class="houzez-icon icon-social-instagram mr-2"></i>
</a>
</span>

<span>
<a class="btn-twitter" target="_blank" href="https://twitter.com/Royalhomeae">
<i class="houzez-icon icon-social-media-twitter mr-2"></i>
</a>
</span>

<span>
<a class="btn-linkedin" target="_blank" href="https://www.linkedin.com/in/royal-home-96399a74/">
<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
</a>
</span>


<span>
<a class="btn-youtube" target="_blank" href="https://www.youtube.com/channel/UCCg9P0RBWxSKwIYcccgAmNQ/videos">
<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
</a>
</span>


</div>
<a class="agent-list-link" href="https://royalhome.ae/agent/nabila-diguer/"><strong>View Listings</strong></a>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<a href="https://royalhome.ae/agent/arthur-kholmatov/">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2020/07/Arthur.jpg" class="img-fluid wp-post-image" alt="" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Arthur.jpg 700w, https://royalhome.ae/wp-content/uploads/2020/07/Arthur-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/07/Arthur-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/07/Arthur-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2020/07/Arthur-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			</a>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><a href="https://royalhome.ae/agent/arthur-kholmatov/">Arthur Kholmatov</a></h2>
</div>

<p class="agent-list-position"> Property Consultant			
at		<a href="https://royalhome.ae/agency/royal-home-real-estate/">
Royal Home Real Estate		
</a>

</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 58 189 7178</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:arthur.k@royalhome.ae">arthur.k@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<div class="agent-social-media flex-grow-1">


<span>
<a class="btn-facebook" target="_blank" href="https://www.facebook.com/RoyalHomeDubai/?ref=hl">
<i class="houzez-icon icon-social-media-facebook mr-2"></i>
</a>
</span>

<span>
<a class="btn-instagram" target="_blank" href="https://www.instagram.com/royalhome_uae/">
<i class="houzez-icon icon-social-instagram mr-2"></i>
</a>
</span>

<span>
<a class="btn-twitter" target="_blank" href="https://twitter.com/Royalhomeae">
<i class="houzez-icon icon-social-media-twitter mr-2"></i>
</a>
</span>

<span>
<a class="btn-linkedin" target="_blank" href="https://www.linkedin.com/in/royal-home-96399a74/">
<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
</a>
</span>


<span>
<a class="btn-youtube" target="_blank" href="https://www.youtube.com/channel/UCCg9P0RBWxSKwIYcccgAmNQ/videos">
<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
</a>
</span>


</div>
<a class="agent-list-link" href="https://royalhome.ae/agent/arthur-kholmatov/"><strong>View Listings</strong></a>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<a href="https://royalhome.ae/agent/vladimir-serov/">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2020/07/Vladimir.jpg" class="img-fluid wp-post-image" alt="" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Vladimir.jpg 700w, https://royalhome.ae/wp-content/uploads/2020/07/Vladimir-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/07/Vladimir-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/07/Vladimir-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2020/07/Vladimir-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			</a>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><a href="https://royalhome.ae/agent/vladimir-serov/">Vladimir Serov</a></h2>
</div>

<p class="agent-list-position"> Property Consultant			
at		<a href="https://royalhome.ae/agency/royal-home-real-estate/">
Royal Home Real Estate		
</a>

</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 56 403 8311</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:vladimir.s@royalhome.ae">vladimir.s@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<div class="agent-social-media flex-grow-1">


<span>
<a class="btn-facebook" target="_blank" href="https://www.facebook.com/RoyalHomeDubai/?ref=hl">
<i class="houzez-icon icon-social-media-facebook mr-2"></i>
</a>
</span>

<span>
<a class="btn-instagram" target="_blank" href="https://www.instagram.com/royalhome_uae/">
<i class="houzez-icon icon-social-instagram mr-2"></i>
</a>
</span>

<span>
<a class="btn-twitter" target="_blank" href="https://twitter.com/Royalhomeae">
<i class="houzez-icon icon-social-media-twitter mr-2"></i>
</a>
</span>

<span>
<a class="btn-linkedin" target="_blank" href="https://www.linkedin.com/in/royal-home-96399a74/">
<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
</a>
</span>


<span>
<a class="btn-youtube" target="_blank" href="https://www.youtube.com/channel/UCCg9P0RBWxSKwIYcccgAmNQ/videos">
<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
</a>
</span>


</div>
<a class="agent-list-link" href="https://royalhome.ae/agent/vladimir-serov/"><strong>View Listings</strong></a>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<a href="https://royalhome.ae/agent/umar-fk/">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2016/02/Umar.jpg" class="img-fluid wp-post-image" alt="" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2016/02/Umar.jpg 700w, https://royalhome.ae/wp-content/uploads/2016/02/Umar-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2016/02/Umar-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2016/02/Umar-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2016/02/Umar-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			</a>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><a href="https://royalhome.ae/agent/umar-fk/">Umar Farooq Khan</a></h2>
</div>

<p class="agent-list-position"> Property Consultant			
at		<a href="https://royalhome.ae/agency/royal-home-real-estate/">
Royal Home Real Estate		
</a>

</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 50 593 0026</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:umar.fk@royalhome.ae">umar.fk@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<div class="agent-social-media flex-grow-1">


<span>
<a class="btn-facebook" target="_blank" href="https://www.facebook.com/RoyalHomeDubai/?ref=hl">
<i class="houzez-icon icon-social-media-facebook mr-2"></i>
</a>
</span>

<span>
<a class="btn-instagram" target="_blank" href="https://www.instagram.com/royalhome_uae/">
<i class="houzez-icon icon-social-instagram mr-2"></i>
</a>
</span>

<span>
<a class="btn-twitter" target="_blank" href="https://twitter.com/Royalhomeae">
<i class="houzez-icon icon-social-media-twitter mr-2"></i>
</a>
</span>

<span>
<a class="btn-linkedin" target="_blank" href="https://www.linkedin.com/in/royal-home-96399a74/">
<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
</a>
</span>


<span>
<a class="btn-youtube" target="_blank" href="https://www.youtube.com/channel/UCCg9P0RBWxSKwIYcccgAmNQ/videos">
<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
</a>
</span>


</div>
<a class="agent-list-link" href="https://royalhome.ae/agent/umar-fk/"><strong>View Listings</strong></a>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<a href="https://royalhome.ae/agent/elena-tatarchuk/">
<img width="200" height="200" src="https://royalhome.ae/wp-content/uploads/2020/07/Elena-Tat.jpg" class="img-fluid wp-post-image" alt="" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Elena-Tat.jpg 200w, https://royalhome.ae/wp-content/uploads/2020/07/Elena-Tat-150x150.jpg 150w" sizes="(max-width: 200px) 100vw, 200px">			</a>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><a href="https://royalhome.ae/agent/elena-tatarchuk/">Elena Tatarchuk</a></h2>
</div>

<p class="agent-list-position"> Property Consultant			
at		<a href="https://royalhome.ae/agency/royal-home-real-estate/">
Royal Home Real Estate		
</a>

</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 50 328 9404</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:elena.tat@royalhome.ae">elena.tat@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<div class="agent-social-media flex-grow-1">


<span>
<a class="btn-facebook" target="_blank" href="https://www.facebook.com/RoyalHomeDubai/?ref=hl">
<i class="houzez-icon icon-social-media-facebook mr-2"></i>
</a>
</span>

<span>
<a class="btn-instagram" target="_blank" href="https://www.instagram.com/royalhome_uae/">
<i class="houzez-icon icon-social-instagram mr-2"></i>
</a>
</span>

<span>
<a class="btn-twitter" target="_blank" href="https://twitter.com/Royalhomeae">
<i class="houzez-icon icon-social-media-twitter mr-2"></i>
</a>
</span>

<span>
<a class="btn-linkedin" target="_blank" href="https://www.linkedin.com/in/royal-home-96399a74/">
<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
</a>
</span>


<span>
<a class="btn-youtube" target="_blank" href="https://www.youtube.com/channel/UCCg9P0RBWxSKwIYcccgAmNQ/videos">
<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
</a>
</span>


</div>
<a class="agent-list-link" href="https://royalhome.ae/agent/elena-tatarchuk/"><strong>View Listings</strong></a>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<a href="https://royalhome.ae/agent/sultan-durani/">
<img width="700" height="700" src="https://royalhome.ae/wp-content/uploads/2020/07/Sultan.jpg" class="img-fluid wp-post-image" alt="" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Sultan.jpg 700w, https://royalhome.ae/wp-content/uploads/2020/07/Sultan-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/07/Sultan-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/07/Sultan-600x600.jpg 600w, https://royalhome.ae/wp-content/uploads/2020/07/Sultan-496x496.jpg 496w" sizes="(max-width: 700px) 100vw, 700px">			</a>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><a href="https://royalhome.ae/agent/sultan-durani/">Sultan Durani</a></h2>
</div>

<p class="agent-list-position"> Property Consultant			
at		<a href="https://royalhome.ae/agency/royal-home-real-estate/">
Royal Home Real Estate		
</a>

</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li>
<strong>Mobile</strong> 
<span class="agent-phone ">+971 55 536 3517</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:sultan.d@royalhome.ae">sultan.d@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<div class="agent-social-media flex-grow-1">


<span>
<a class="btn-facebook" target="_blank" href="https://www.facebook.com/RoyalHomeDubai/?ref=hl">
<i class="houzez-icon icon-social-media-facebook mr-2"></i>
</a>
</span>

<span>
<a class="btn-instagram" target="_blank" href="https://www.instagram.com/royalhome_uae/">
<i class="houzez-icon icon-social-instagram mr-2"></i>
</a>
</span>

<span>
<a class="btn-twitter" target="_blank" href="https://twitter.com/Royalhomeae">
<i class="houzez-icon icon-social-media-twitter mr-2"></i>
</a>
</span>

<span>
<a class="btn-linkedin" target="_blank" href="https://www.linkedin.com/in/royal-home-96399a74/">
<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
</a>
</span>


<span>
<a class="btn-youtube" target="_blank" href="https://www.youtube.com/channel/UCCg9P0RBWxSKwIYcccgAmNQ/videos">
<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
</a>
</span>


</div>
<a class="agent-list-link" href="https://royalhome.ae/agent/sultan-durani/"><strong>View Listings</strong></a>
</div>

</div>
</div>
</div><div class="agent-list-wrap">
<div class="row d-flex">

<div class="col-4 agent-list-image">
<a href="https://royalhome.ae/agent/royal-home/">
<img width="512" height="512" src="https://royalhome.ae/wp-content/uploads/2020/07/Site-icon.jpg" class="img-fluid wp-post-image" alt="" loading="lazy" srcset="https://royalhome.ae/wp-content/uploads/2020/07/Site-icon.jpg 512w, https://royalhome.ae/wp-content/uploads/2020/07/Site-icon-300x300.jpg 300w, https://royalhome.ae/wp-content/uploads/2020/07/Site-icon-150x150.jpg 150w, https://royalhome.ae/wp-content/uploads/2020/07/Site-icon-496x496.jpg 496w" sizes="(max-width: 512px) 100vw, 512px">			</a>
</div>

<div class="col-8 agent-list-content flex-grow-1">
<div class="d-flex xxs-column">
<h2><a href="https://royalhome.ae/agent/royal-home/">Royal Home</a></h2>
</div>

<p class="agent-list-position"> Admin			
at		<a href="https://royalhome.ae/agency/royal-home-real-estate/">
Royal Home Real Estate		
</a>

</p>

<ul class="agent-list-contact list-unstyled">

<li>
<strong>Office</strong> 
<span class="agent-phone ">+971 4 399 0990</span>
</li>
<li class="email">
<strong>Email</strong> 
<a href="mailto:info@royalhome.ae">info@royalhome.ae</a>
</li>
</ul>

<div class="d-flex sm-column">
<div class="agent-social-media flex-grow-1">


<span>
<a class="btn-facebook" target="_blank" href="https://www.facebook.com/RoyalHomeDubai/?ref=hl">
<i class="houzez-icon icon-social-media-facebook mr-2"></i>
</a>
</span>

<span>
<a class="btn-instagram" target="_blank" href="https://www.instagram.com/royalhome_uae/">
<i class="houzez-icon icon-social-instagram mr-2"></i>
</a>
</span>

<span>
<a class="btn-twitter" target="_blank" href="https://twitter.com/Royalhomeae">
<i class="houzez-icon icon-social-media-twitter mr-2"></i>
</a>
</span>

<span>
<a class="btn-linkedin" target="_blank" href="https://www.linkedin.com/in/royal-home-96399a74/">
<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
</a>
</span>


<span>
<a class="btn-youtube" target="_blank" href="https://www.youtube.com/channel/UCCg9P0RBWxSKwIYcccgAmNQ/videos">
<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
</a>
</span>


</div>
<a class="agent-list-link" href="https://royalhome.ae/agent/royal-home/"><strong>View Listings</strong></a>
</div>

</div>
</div>
</div>                </div>


</div>
    </div>
    </div>
    </div>
    `
}