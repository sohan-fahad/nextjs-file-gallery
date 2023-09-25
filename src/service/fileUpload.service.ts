export class FileUploadApiService {
    static async uploadFile(file: File) {
        try {
            const formData = new FormData();
            formData.append("file", file)
            const response = await fetch('/api/image', {
                method: "POST",
                body: formData
            })

            return await response.json()
        } catch (error) {
            console.log("🚀 ~ file: fileUpload.service.ts:13 ~ FileUploadService ~ uploadFile ~ error:", error)
        }
    }

    static async getFiles() {
        try {
            const response = await fetch('/api/image')
            return await response.json()
        } catch (error) {
            console.log("🚀 ~ file: fileUpload.service.ts:22 ~ FileUploadApiService ~ getFiles ~ error:", error)
        }
    }
}