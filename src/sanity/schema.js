import { authorType } from './types/author'
import { blockContentType } from './types/block-content'
import { categoryType } from './types/category'
import { postType } from './types/post'
import { serviceType } from './types/services'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, serviceType],
}
