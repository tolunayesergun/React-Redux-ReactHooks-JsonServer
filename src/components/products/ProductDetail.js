import React from "react"
import TextInput from "../toolbox/TextInput"
import SelectInput from "../toolbox/SelectInput"
const ProductDetail = ({product, categories, onChange, onSave}) => {

    return (
        <form onSubmit={onSave}>

            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput
                name="productName"
                label="Ürün Adı"
                value={product.productName}
                onChange={onChange}
                error="Hata"
            />

            <SelectInput
                name="categoryId"
                label="Kategori Adı"
                value={product.categoryId || ""}
                defaultOption="Seçiniz"
                options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName
                }))}
                onChange={onChange}
                error="Hata"
            />

            <TextInput
                name="unitPrice"
                label="Ürün Fiyatı"
                value={product.unitPrice}
                onChange={onChange}
                error="Hata"
            />

            <TextInput
                name="unitsInStock"
                label="Stok Adedi"
                value={product.unitsInStock}
                onChange={onChange}
                error="Hata"
            />

            <button type="submit" className="btn btn-success">Kaydet</button>
        </form>

    )

}

export default ProductDetail;