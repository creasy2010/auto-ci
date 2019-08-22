#! ./venv/bin/python3
from skimage.measure import compare_ssim
#~ import skimage  as ssim

# import argparse
import imutils
import cv2
import os
import numpy as np
import json


baseImgDir = "/Users/dong/wanmi/sbc/sbc-supplier/__tests__/screenshot-base"
compImgDir = "/Users/dong/wanmi/sbc/sbc-supplier/__tests__/screenshot"

allImgs = os.listdir(baseImgDir)

def saveFile (data,filePath):
    jsObj = json.dumps(data)
    fileObject = open(filePath, 'w')
    fileObject.write(jsObj)
    fileObject.close()


def grayImgRound (grayImg):
    for index in range(len(grayImg)):
        for jIndex in range(len(grayImg[index])):
            grayImg[index][jIndex] = round(grayImg[index][jIndex], 3)
    return grayImg



compareResult= []

while len(allImgs) > 0 :
    imgName=allImgs.pop()
    # print (imgName)
    # TODO 这里可以添加缓存, 文件如果没有发生变化就不再重新计算;
    _baseImg = cv2.imread(os.path.join(baseImgDir,imgName))
    _compImg = cv2.imread(os.path.join(compImgDir,imgName))
    # _compImg = cv2.imread(os.path.join(compImgDir,allImgs[5]))

    grayA = cv2.cvtColor(_baseImg,cv2.COLOR_BGR2GRAY)
    grayB = cv2.cvtColor(_compImg,cv2.COLOR_BGR2GRAY)

    # print("gray shape:",np.shape(grayA),np.shape(grayB))
    (score,diff) = compare_ssim(grayA,grayB,full = True)

    finalScore =round(score,3)
    # print("SSIM:{}".format(finalScore))

    if finalScore == 1:
        continue


    currentCompareInfo ={
        "fileName": imgName,
        "score": finalScore
    }

    compareResult.append(currentCompareInfo)

    diff = np.around(diff, 3)
    diff = (diff * 255).astype("uint8")

    thresh = cv2.threshold(diff,0,255,cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
    cnts = cv2.findContours(thresh.copy(),cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
    # print("cnts==>",cnts);
    cnts = cnts[0] # if imutils.is_cv2() else cnts[1]


    for c in cnts:
        (x,y,w,h) = cv2.boundingRect(c)
        # cv2.rectangle(_baseImg,(x,y),(x+w,y+h),(0,0,255),2)
        cv2.rectangle(_compImg,(x,y),(x+w,y+h),(0,0,255),2)

    comparePath = os.path.join(compImgDir,"check-"+imgName)
    cv2.imwrite(comparePath,_compImg)
    currentCompareInfo.setdefault('img',comparePath)

print( "inconsistent pictures::",len(compareResult))
print( "checkResult start::",json.dumps( compareResult ), 'checkResult ent::')