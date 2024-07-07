/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { ReviewSchemaDeletedAt } from './reviewSchemaDeletedAt';
import type { ReviewSchemaId } from './reviewSchemaId';
import type { ReviewVersionSchema } from './reviewVersionSchema';
import type { UserOut } from './userOut';

export interface ReviewSchema {
  article_id: number;
  comments_count?: number;
  content: string;
  created_at: string;
  deleted_at?: ReviewSchemaDeletedAt;
  id?: ReviewSchemaId;
  is_author?: boolean;
  rating: number;
  /** @maxLength 255 */
  subject: string;
  updated_at: string;
  user: UserOut;
  version?: number;
  versions: ReviewVersionSchema[];
}
