import {products} from './data.js'
const container = document.querySelector('.page-shop .product-list')
const slider = document.querySelector('.page-shop .swiper-wrapper')
const descriptionDiv = document.querySelector('.page-shop .description')
const body = document.querySelector('body')


const addToFavorite = () => {
    let favorites = document.querySelectorAll('.favorite-btn img')
    for(let btn of favorites){
        btn.addEventListener('click', () => {
            console.log('works')
            if(btn.src.includes('favorite-empty.svg')){
                btn.src = '../../assets/media/favorite-fill.svg'
            } else{
                btn.src = '../../assets/media/favorite-empty.svg'
            }
        })
    }
}


let content = ''
for(let product of products){
    content += `
                    <li class="product">
                            <div class="product-wrapper" data-id =${product.id}>
                                <div class="image-wrapper">
                                    <img src=${product.gallery[0].g_image} alt="image">
                                </div> 
                                <h2 class="title">${product.name}</h2>
                                <div class="buy-wrapper">
                                    <div class="price-wrapper">
                                        <span class="price old-price">${product.price[0].old_price}</span>
                                        <span class="price">${product.price[0].new_price}</span>
                                    </div>
                                    <button class="add-btn">
                                        <img src="../../assets/media/add-btn.svg" alt="add">
                                    </button>    
                                </div>
                            </div> 
                            <button class="favorite-btn">
                                <img src="../../assets/media/favorite-empty.svg" alt="">
                            </button>      
                    </li>
                `
    container.innerHTML = content

    const productItem = document.querySelectorAll('.product-wrapper')
    for(let item of productItem){
        item.addEventListener('click', () => {
            openDetails(item.dataset.id)
        })
    }
    addToFavorite()
}

const openDetails = (id) => {
    let productWithDetails = {};
    const oneProduct = products?.filter((product) => {
        if(parseInt(product.id) === parseInt(id)){
            return product
        }
    })

    productWithDetails = oneProduct[0]


    content = ''
    for(let image of productWithDetails.gallery){
        content += `
                    <div class="swiper-slide">
                         <div class="image-wrapper">
                            <img src=${image.g_image} alt="">
                         </div>
                    </div>
                `

        slider.innerHTML = content
    }

    let desc = ''
    desc = `
        <h2 class="title">${productWithDetails.name}</h2>
        <p class="paragraph"> ${productWithDetails.description} </p>
        <div class="price-wrapper">
            <div class="price">Price - <span >${productWithDetails.price[0].new_price}</span></div>
             <button class="favorite-btn">
                 <img src="../../assets/media/favorite-empty.svg" alt="favorite">
             </button>  
        </div>
        <div class="sizes"></div>
        <div class="more-info-wrapper"></div>
        <button class="btn-common">Add To Cart</button>
    `
    descriptionDiv.innerHTML = desc


    const sizes = document.querySelector('.sizes')
    let s = ''
    for(let size of productWithDetails.sizes){
        s += `
            <span class="size">${size.size}</span>
        `
        sizes.innerHTML = s
    }

    const moreInfoWrapper = document.querySelector('.more-info-wrapper')
    let info = ''
    for(let infos of productWithDetails.more_information){
        info += `
            <div class="info-wrapper">
                <div class="info-headline">
                    <h2 class="title">${infos.title}</h2>
                    <span class="show-info-arrow">
                        <img src="../../assets/media/arrow-down.svg" alt="open">
                    </span>
                </div>
               <p class="full-info paragraph">${infos.full}</p>
            </div>
        `
    }

    moreInfoWrapper.innerHTML = info

    const closeDetails = document.querySelectorAll('.page-shop .close, .product-detail .overlay')
    body.classList.add('show-details')
    if(closeDetails){
       for(let close of closeDetails){
           close.addEventListener('click', () => {
               setTimeout(() => {
                   body.classList.remove('show-details')
               }, 500)
           })
       }
    }


    const fullInfoArrows = document.querySelectorAll('.info-wrapper')
    fullInfoArrows.forEach((element) => {
        element.addEventListener('click', function () {
            fullInfoArrows.forEach((e)=> e.classList.remove('show-full-info'))
            element.classList.add('show-full-info');
            if(element.classList.contains('show-full-info')) {
                element.addEventListener('click', () => {
                    element.classList.toggle('show-full-info')
                })
            }
        })
    })

    addToFavorite()
}


