import { buildCollection } from "@firecms/core";


export const categoryCollection = buildCollection({
    id: "category",
    path: "category",
    name: "Category",
    singularName: "Category",
    icon: "article",
    description: "A collection of categories",
    defaultSize: "l",
    properties: {
        seo: {
            name: "SEO Details",
            dataType: "map",
            properties: {
                meta_title: {
                    name: "Meta Title",
                    dataType: "string",
                    validation: { required: false }
                },
                meta_description: {
                    name: "Meta Description",
                    dataType: "string",
                    multiline: true, // 👈 makes it textarea
                    validation: { required: false }
                },
                canonical_url: {
                    name: "Canonical URL",
                    dataType: "string",
                    url: true, // 👈 optional validation
                    validation: { required: false }
                }
            }
        },
        slug: {
            name: "Slug",
            validation: { required: true },
            dataType: "string"
        },
        name: {
            name: "Category Name",
            validation: { required: true },
            dataType: "string"
        },
        description: {
            name: "Category Description",
            validation: { required: true },
            dataType: "string"
        },
        header_image: {
            name: "Header image Link(URL)",
            dataType: "string"
        },
        schema: {
            name: "Schemas",
            dataType: "array",
            of: {
                dataType: "map",
                properties: {
                    title: {
                        name: "Schema Title",
                        dataType: "string"
                    },
                    type: {
                        name: "Schema Type",
                        dataType: "string",
                        enumValues: {
                            faq: "FAQ Schema",
                            article: "Article Schema",
                            product: "Product Schema",
                            custom: "Custom JSON"
                        }
                    },
                    json: {
                        name: "Schema JSON",
                        dataType: "string",
                        multiline: true
                    }
                }
            }
        }
    },

});
