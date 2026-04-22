import { buildCollection } from "@firecms/core";


export const blogCollection = buildCollection({
    id: "blog",
    path: "blog",
    name: "Blog",
    singularName: "Blog entry",
    icon: "article",
    description: "A collection of blog entries",
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
            name: "Blog Title",
            validation: { required: true },
            dataType: "string"
        },
        header_image:{
            name: "Header image Link(URL)",
            validation: { required: true },
            dataType: "string"
        },
        content: {
            name: "Blog Content",
            description: "Content blocks for the blog entry",
            validation: { required: true },
            dataType: "string",  // Changed from 'array' to 'string'
            markdown: true  // Enables Markdown support for rich text formatting
        }, 
        faqs: {
            name: "FAQs",
            description: "Frequently asked questions",
            dataType: "array",
            of: {
                dataType: "map",
                properties: {
                    question: {
                        name: "Question",
                        dataType: "string",
                        validation: { required: true }
                    },
                    answer: {
                        name: "Answer",
                        dataType: "string",
                        multiline: true, // textarea
                        markdown: true,  // optional rich text
                        validation: { required: true }
                    }
                }
            }
        },       
        created_on: {
            name: "Created on",
            dataType: "date",
            autoValue: "on_create"
        },
        status: {
            name: "Status",
            validation: { required: true },
            dataType: "string",
            enumValues: {
                published: {
                    id: "published",
                    label: "Published",
                },
                draft: "Draft"
            },
            defaultValue: "draft"
        },
        publish_date: {
            name: "Publish date",
            dataType: "date",
            clearable: true
        },
        reviewed: {
            name: "Reviewed",
            dataType: "boolean"
        },
        category: {
            name: "Category",
            validation: { required: true },
            dataType: "string"
        },
        tags: {
            name: "Tags",
            description: "Example of generic array",
            dataType: "array",
            of: {
                dataType: "string",
                previewAsTag: true
            }
        }
    },
    initialFilter: {
        status: ["==", "published"]
    }
});
