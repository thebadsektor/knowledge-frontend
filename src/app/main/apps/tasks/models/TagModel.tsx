import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { TagType } from '../types/TagType';

/**
 * The tag model.
 * @param data The tag data.
 * @returns The tag model.
 */
const TagModel = (data: PartialDeep<TagType>) =>
	_.defaults(data || {}, {
		id: _.uniqueId(),
		title: ''
	}) as TagType;

export default TagModel;
