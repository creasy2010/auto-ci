import {IUseCase, UseCaseId} from '../typings';
import {join} from 'path';

/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/9/9
 **/

const basePah = join(__dirname, '../../projects');

export function init() {}

/**
 * 加载一个用例;
 *
 * @param {string} useCaseId
 * @returns {IUseCase}
 */
export function loadUseCase(useCaseId: UseCaseId): IUseCase {
  let useCase: IUseCase = require(join(basePah, useCaseId));
  useCase.id =useCaseId;
  return useCase;
}

/**
 * 卸载一个用例;
 *
 * @param {string} useCaseId
 */
export function unloadUseCase(useCaseId: UseCaseId): void {
  delete require.cache[require.resolve(join(basePah, useCaseId))];
}
