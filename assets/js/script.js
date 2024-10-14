$(document).ready(function () {
    // filter products in index.html
    $('#product-categories').on('click', 'li', function () {
        const selectedKey = $(this).data('key');

        // Remove active class from all items
        $('#product-categories li').removeClass('text-primary-800');

        // Add active class to clicked item
        $(this).addClass('text-primary-800');

        if (selectedKey === 'all') {
            $('.product-item').show();
            return;
        }

        $('.product-item').hide();
        $(`.product-item[data-key="${selectedKey}"]`).show();
    });

    // looping products, in index.html
    $.each(products, function (_, product) {
        const formattedPriceValue = window.formattedPrice(product.price);

        const productItem = `
            <div class="card product-item" data-key="${product.ukuran}">
            
            <img class="card-img" src="${product.image}" alt="${product.name}">
            <div class="card-content">
            <h2 class="card-title">${product.name} | ${product.ukuran} Gram</h2>
                <p class="card-price">${formattedPriceValue}</p>
                <button
                    href="detail-product.html"
                    class="card-button"
                    onclick="setDetailProduct('${product.id}')">See Details</button>
                    </div>
            </div>
            `
        $('#product-grid').append(productItem);
    });

    // set active category
    $('#product-categories li[data-key="all"]').addClass('text-primary-800');

    // looping categories, in index.html
    $.each(categories, function (_, category) {
        const categoryItem = `
         <a href="${category.link}">                          
            <div class="category-item">
                <img src="${category.image}" alt="product image">
                <div class="category-item-content">
                    <p>${category.name}</p>
                </div>
            </div>
          </a>
        `
        $("#listCategories").append(categoryItem);
    });

    // filter categories page
    $('input[name="ukuran"], input[name="category"]').on('change', filterProducts);

    $.each(products, function (_, product) {
        const formattedPriceValue = window.formattedPrice(product.price);

        const productItem = `
        <r onclick="setDetailProduct('${product.id}')" class="category-page-item" data-ukuran="${product.ukuran}" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="category-page-item-img">
            <div class="category-page-item-content">
            <p class="category-page-item-name">${product.name} ${product.ukuran} Gram</p>
            <p class="category-page-item-price">${formattedPriceValue}</p>
            </div>
        </div>
        `

        $('#productGrid').append(productItem);
    })

    $(".detail-product-title").text(getDetailProduct().name);
    $(".detail-product-description").text(getDetailProduct().desciption);
    $(".detail-product-price").html(formattedPrice(getDetailProduct().price))
    $(".image-product").attr("src", getDetailProduct().image);
    $(".image-product").attr("alt", getDetailProduct().name);

    // toggle menu
    const menuButton = $("#menuButton");
    const mobileMenu = $("#mobileMenu");
    menuButton.click(function (e) {
        e.preventDefault();
        mobileMenu.toggleClass('hidden');
    })

    $(document).click(function (event) {
        if (!$(event.target).closest('#mobileMenu, #menuButton').length) {
            mobileMenu.addClass('hidden');
        }
    });


    let qtyProd = 1;
    updateQtyDisplay(qtyProd);

    $('#quantity-increase').on('click', function () {
        qtyProd++;
        updateQtyDisplay(qtyProd);
    });

    $('#quantity-decrease').on('click', function () {
        if (qtyProd == 1) return;

        qtyProd--;
        updateQtyDisplay(qtyProd);
    });

    $(".btn-order").on('click', function () {
        if (qtyProd < 1) return;
        orderItem(getDetailProduct(), qtyProd);
    })
});
