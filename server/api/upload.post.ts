
export default defineEventHandler(async (event) => {
   try {
      const body: any = await readMultipartFormData(event);
      console.log(body);
      return { success: true };
   } catch (error) {
      console.log(error);
      throw createError({
         statusCode: 500,
         statusMessage: 'Something went wrong'
      })
   }
})