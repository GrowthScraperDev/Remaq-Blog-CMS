import { buildCollection } from "@firecms/core";


export const caseStudiesCollection = buildCollection({
    id: "casestudies",
    path: "casestudies",
    name: "Case Studies",
    singularName: "Case Studies entry",
    icon: "article",
    description: "A collection of case studies entries",
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
            name: "Case Studies Title",
            validation: { required: true },
            dataType: "string"
        },
        excerpt: {
            name: "Case Studies Short Description",
            validation: { required: true },
            dataType: "string"
        },
        header_image:{
            name: "Header image Link(URL)",
            dataType: "string"
        },
        content: {
            name: "Case Studies Content",
            description: "Content blocks for the case studies entry",
            validation: { required: true },
            defaultValue: "", // ✅ IMPORTANT
            dataType: "string",  // Changed from 'array' to 'string'
            markdown: true , // Enables Markdown support for rich text formatting
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
                    article: "Article Schema",
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
