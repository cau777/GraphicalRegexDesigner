import {AnySymbolToken} from "../models/tokens/AnySymbolToken";
import {LiteralToken} from "../models/tokens/LiteralToken";
import {OptionalToken} from "../models/tokens/OptionalToken";
import {Plus0Times} from "../models/tokens/Plus0Times";
import {Plus1Times} from "../models/tokens/Plus1Times";
import {ExactTimesToken} from "../models/tokens/ExactTimesToken";
import {MoreThanToken} from "../models/tokens/MoreThanToken";
import {LessThanToken} from "../models/tokens/LessThanToken";
import {BetweenTimesToken} from "../models/tokens/BetweenTimesToken";
import {SymbolAlternativesToken} from "../models/tokens/SymbolAlternativesToken";
import {TermsAlternativesToken} from "../models/tokens/TermsAlternativesToken";
import {NegativeSymbolAlternativesToken} from "../models/tokens/NegativeSymbolAlternativesToken";
import {RegexFragmentToken} from "../models/tokens/RegexFragmentToken";
import {GroupToken} from "../models/tokens/GroupToken";
import {NewLineToken} from "../models/tokens/NewLineToken";
import {TabToken} from "../models/tokens/TabToken";

export const CommonTokens = [AnySymbolToken, LiteralToken, OptionalToken, Plus0Times, Plus1Times, ExactTimesToken,
    MoreThanToken, LessThanToken, BetweenTimesToken, SymbolAlternativesToken, TermsAlternativesToken,
    NegativeSymbolAlternativesToken, RegexFragmentToken, GroupToken, NewLineToken, TabToken];
