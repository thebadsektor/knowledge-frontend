import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { ChecklistType } from '../types/ChecklistType';

/**
 * The checklist model.
 * @param data The checklist data.
 * @returns The checklist model.
 */
function ChecklistModel(data: PartialDeep<ChecklistType>) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		name: '',
		checkItems: []
	});
}

export default ChecklistModel;
