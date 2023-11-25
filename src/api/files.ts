import type { BaseResponse } from '@/types'
import { httpRequest } from './axios'

export class UploadAPI {
  private static UPLOAD_API_PREFIX = `/upload`

  private static headers = { 'Content-Type': 'multipart/form-data' }

  /**
   * 上传文件
   * @param data 文件数据
   * @param options 上传配置
   * @todo 进度条功能暂未实现
   */
  static uploadFile(data: any, options?: any) {
    return httpRequest.post<BaseResponse<{ path: string }>>(this.UPLOAD_API_PREFIX, data, {
      headers: this.headers,
      onUploadProgress: options?.onUploadProgress ? options.onUploadProgress : () => {}
    })
  }

  /**
   * 批量上传文件
   * @param data 文件数据
   * @param options 上传配置
   *
   * @todo 进度条功能暂未实现
   */
  static uploadFiles(data: any) {
    return httpRequest.post(`${this.UPLOAD_API_PREFIX}/batch`, data, {
      headers: this.headers
    })
  }
}
