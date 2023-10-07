import _ from '@lodash';
import { PartialDeep } from 'type-fest';
import { CardType } from '../types/CardType';
import { BoardType } from '../types/BoardType';

export type CardIdsType = CardType['id'][];

/**
 * The board model.
 * @param data The board data.
 * @returns The board model.
 */
function BoardModel(data: PartialDeep<BoardType>) {
	data = data || {};

	return _.defaults(data, {
		id: _.uniqueId(),
		title: 'Untitled Board',
		description: '',
		icon: 'heroicons-outline:template',
		lastActivity: new Date(),
		members: [],
		settings: {
			subscribed: true,
			cardCoverImages: true
		},
		lists: [],
		labels: []
	});
}

export default BoardModel;
