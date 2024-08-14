import { SetterOrUpdater, useRecoilState } from "recoil";
import { contentWidthState, ContentWidthType } from "../../states/layout/layoutAtom";

function useContentWidth(): [ContentWidthType, SetterOrUpdater<ContentWidthType>] {
  const [contentWidth, setContentWidth] = useRecoilState(contentWidthState);
  return [contentWidth, setContentWidth];
}

export default useContentWidth;
