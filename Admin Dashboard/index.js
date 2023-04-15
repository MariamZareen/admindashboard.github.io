const sideMenu=document.querySelector("aside")
const menubtn =document.querySelector('#menu-btn');
const closebtn =document.querySelector('#close-btn')
const themeToggler=document.querySelector('.theme-toggler')

menubtn.addEventListener('click',()=>{
  sideMenu.style.display ='block';
})
closebtn.addEventListener('click',()=>{
    sideMenu.style.display ='none';
})
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
  

})
Orders.forEach(order => {
    const tr =document.createElement('tr')
    const trContent=`
                   <td>${order.productName}</td>
                   <td>${order.productNumebr}</td>
                   <td>${order.paymentStatus}</td>
                   <td class='${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}'>${order.shipping}</td>
                   <td class='primary'>Details</td>
                    `;
        tr.innerHTML =trContent;
        document.querySelector('table tbody').appendChild(tr);
})