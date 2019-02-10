import { MtgRuling } from './mtg-ruling';
import { MtgForeignName } from './mtg-foreign-name';

export interface MtgCard {
    name: string;
    names: string[];
    manaCost: string;
    cmc: number;
    colors: string[];
    colorIdentity: string[];
    type: string;
    supertypes: string[];
    types: string[];
    subtypes: string[];
    rarity: string;
    set: string;
    text: string;
    artist: string;
    number: string;
    power: string;
    toughness: string;
    layout: string;
    multiverseid: number;
    imageUrl: string;
    rulings: MtgRuling[];
    foreignNames: MtgForeignName[];
    printings: string[];
    originalText: string;
    originalType: string;
    id: string;
}
