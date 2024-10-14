function formattedPrice(price) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
}

function setDetailProduct(id) {
    const product = products.find(product => product.id == id);
    localStorage.setItem('product', JSON.stringify(product));
    window.location.href = 'detail-product.html';
}

function getDetailProduct() {
    const product = JSON.parse(localStorage.getItem('product'));
    return product;
}

function filterProducts() {
    var selectedUkuran = $('input[name="ukuran"]:checked').val();
    var selectedCategories = $('input[name="category"]:checked').map(function () {
        return this.value;
    }).get();

    $('.category-page-item').each(function () {
        var $item = $(this);
        var itemUkuran = $item.data('ukuran');
        var itemCategory = $item.data('category');

        var ukuranMatch = !selectedUkuran || itemUkuran == selectedUkuran;
        var categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(itemCategory);

        if (ukuranMatch && categoryMatch) {
            $item.show();
        } else {
            $item.hide();
        }
    });
}

function orderItem(product, qty)
{
    var message = `Misi Kak, mau PO ${product.name} ukuran ${product.ukuran} gram ${qty} Pcs kak`
    var nowa = "62895383124968"
    window.open(`https://wa.me/${nowa}?text=${encodeURI(message)}`)
}

function updateQtyDisplay(qtyProd) 
{
    $('.detail-product-quantity-display').text(qtyProd);
}