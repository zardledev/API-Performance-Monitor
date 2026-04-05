const { z } = require("zod");


const httpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

const createEndpointSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters"),
  url: z.url("URL must be a valid URL"),
  method: z.enum(httpMethods, {
    error: "Method must be one of GET, POST, PUT, PATCH, DELETE",
  }),
  description: z
    .string()
    .max(255, "Description must be at most 255 characters")
    .optional(),
});

const updateEndpointSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters")
    .optional(),
  url: z.url("URL must be a valid URL").optional(),
  method: z
    .enum(httpMethods, {
      error: "Method must be one of GET, POST, PUT, PATCH, DELETE",
    })
    .optional(),
  description: z
    .string()
    .max(255, "Description must be at most 255 characters")
    .optional(),
});

module.exports = {
  createEndpointSchema,
  updateEndpointSchema,
};