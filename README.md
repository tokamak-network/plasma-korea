# 알리는글

번역에 힘써준 jenny kang(jenny.k@onther.io)에게 감사의 말을 전합니다.

# 플라즈마 백서 번역

온더(Onther Inc.)에서 번역한 플라즈마 백서입니다.
아직 초안이며, 수정 및 보완검토가 필요합니다. [이슈](https://github.com/Onther-Tech/plasma-korea/issues)와 [pull request](https://github.com/Onther-Tech/plasma-korea/pulls)를 통해 더 나은 번역이 될 수 있도록 많은 참여 부탁드립니다.

원본링크: https://plasma.io/plasma.pdf

# 용어통일

* root blockchain (root chain) / parent blockchain (parent chain)
: 루트 블록체인 / 부모 블록체인 / 상위 블록체인
하위 체인의 상태를 기록하는 상위 블록체인을 의미하며 플라즈마의 화이트 페이퍼에서는 대부분 이더리움을 지칭한다.

* child blockchian (child chain) : 자식 블록체인
상위 블록체인에 상태를 기록하는 하위 블록체인을 의미한다.

* fidelity bonds : 종업원의 부정직한 행동으로 인해 발생된 손실을 고용주에게 보상하는 보험상품의 일종으로 백서에서는 차일드 체인에서 일어난 위조 행위들에 대한 보장을 의미한다. 

* Proof-of-Stake : 지분 증명
* fraud proof : 사기 증명 / 위조 증명
* chain tip : 체인의 끝/마지막
* decentralized : 탈중앙화
* Censorship : 검열


# 목차

* [요약(abstract)](https://github.com/Onther-Tech/plasma-korea/blob/master/abstract.md)

1. [확장성 높은 다중 연산](https://github.com/Onther-Tech/plasma-korea/blob/master/1_Scalable_Multi-Party_Computation.md)
2. [플라즈마](https://github.com/Onther-Tech/plasma-korea/blob/master/2_Plasma.md)
   1. [플라즈마 블록체인 또는 표면화된 멀티파티 채널(Externalized Multiparty Channels)](https://github.com/Onther-Tech/plasma-korea/blob/master/2_Plasma.md#%ED%94%8C%EB%9D%BC%EC%A6%88%EB%A7%88-%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%EB%98%90%EB%8A%94-%ED%91%9C%EB%A9%B4%ED%99%94%EB%90%9C-%EB%A9%80%ED%8B%B0%ED%8C%8C%ED%8B%B0-%EC%B1%84%EB%84%90externalized-multiparty-channels)
   2. [블록체인의 집행 가능한 블록체인](https://github.com/Onther-Tech/plasma-korea/blob/master/2_Plasma.md#%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EC%9D%98-%EC%A7%91%ED%96%89-%EA%B0%80%EB%8A%A5%ED%95%9C-%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8)
   3. [플라즈마 지분 증명 (proof-of-stake)](https://github.com/Onther-Tech/plasma-korea/blob/master/2_Plasma.md#plasma-%EC%A7%80%EB%B6%84-%EC%A6%9D%EB%AA%85-proof-of-stake)
   4. [맵리듀스(MapReduce)로서의 블록체인](https://github.com/Onther-Tech/plasma-korea/blob/master/2_Plasma.md#mapreduce%EB%A1%9C%EC%84%9C%EC%9D%98-%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8)
   5. [영구적으로 탈중앙화되어 있고 자율적인 블록체인의 경제적 인센티브에 대한 설명](https://github.com/Onther-Tech/plasma-korea/blob/master/2_Plasma.md#%EC%98%81%EA%B5%AC%EC%A0%81%EC%9C%BC%EB%A1%9C-%ED%83%88%EC%A4%91%EC%95%99%ED%99%94-%EB%90%98%EC%96%B4%EC%9E%88%EA%B3%A0-%EC%9E%90%EC%9C%A8%EC%A0%81%EC%9D%B8-%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EC%9D%98-%EA%B2%BD%EC%A0%9C%EC%A0%81-%EC%9D%B8%EC%84%BC%ED%8B%B0%EB%B8%8C%EC%97%90-%EB%8C%80%ED%95%9C-%EC%84%A4%EB%AA%85)
3. [설계 스택과 스마트 컨트랙트](https://github.com/Onther-Tech/plasma-korea/blob/master/3_Design_Stack_and_Smart_Contracts.MD)
   1. [샤딩에서 가장 중요한 문제는 정보](https://github.com/Onther-Tech/plasma-korea/blob/master/3_Design_Stack_and_Smart_Contracts.MD#%EC%83%A4%EB%94%A9%EC%97%90%EC%84%9C-%EA%B0%80%EC%9E%A5-%EC%A4%91%EC%9A%94%ED%95%9C-%EB%AC%B8%EC%A0%9C%EB%8A%94-%EC%A0%95%EB%B3%B4)
4. [관련연구](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md)
   1. [트루빗(TrueBit)](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md#%ED%8A%B8%EB%A3%A8%EB%B9%97truebit)
   2. [블록체인 샤딩](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md#%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%EC%83%A4%EB%94%A9)
   3. [연합 사이드체인](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md#%EC%97%B0%ED%95%A9-%EC%82%AC%EC%9D%B4%EB%93%9C%EC%B2%B4%EC%9D%B8)
   4. [결합 마이닝된 블록체인](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md#%EA%B2%B0%ED%95%A9%EB%A7%88%EC%9D%B4%EB%8B%9D%EB%90%9C-%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8merge-mined-blockchain)
   5. [트리체인](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md#%ED%8A%B8%EB%A6%AC%EC%B2%B4%EC%9D%B8)
   6. [영지식증명](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md#%EC%98%81%EC%A7%80%EC%8B%9D%EC%A6%9D%EB%AA%85zk-snark-%EB%B0%8F-zk-stark)
   7. [코스모스와 텐더민트](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md#%EC%BD%94%EC%8A%A4%EB%AA%A8%EC%8A%A4%EC%99%80-%ED%85%90%EB%8D%94%EB%AF%BC%ED%8A%B8)
   8. [포카닷](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md#%ED%8F%AC%EC%B9%B4%EB%8B%B7)
   9. [루미노](https://github.com/Onther-Tech/plasma-korea/blob/master/4_Related_Work.md#%EB%A3%A8%EB%AF%B8%EB%85%B8)
5. [다중 오프체인 상태](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md)
   1. [위조증명](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EC%9C%84%EC%A1%B0%EC%A6%9D%EB%AA%85)
   2. [입금(deposit)](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EC%9E%85%EA%B8%88deposit)
   3. [거액 인출과 비트맵 방식의 상태](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EA%B1%B0%EC%95%A1-%EC%9D%B8%EC%B6%9C%EA%B3%BC-%EB%B9%84%ED%8A%B8%EB%A7%B5-%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%83%81%ED%83%9C)
   4. [상태변화](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EC%83%81%ED%83%9C%EB%B3%80%ED%99%94)
   5. [루트 체인의 주기적인 이행](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EB%A3%A8%ED%8A%B8-%EC%B2%B4%EC%9D%B8%EC%97%90-%EC%A3%BC%EA%B8%B0%EC%A0%81%EC%9D%B8-%EC%9D%B4%ED%96%89)
   6. [인출](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EC%9D%B8%EC%B6%9C)
      1. [단순 인출](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%9D%B8%EC%B6%9C)
      2. [빠른 인출](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EB%B9%A0%EB%A5%B8-%EC%9D%B8%EC%B6%9C)
   7. [적대적 대량 인출](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EC%A0%81%EB%8C%80%EC%A0%81-%EB%8C%80%EB%9F%89-%EC%9D%B8%EC%B6%9C)
      1. [대량 인출 항의: 부정확한 인출 시도](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EB%8C%80%EB%9F%89-%EC%9D%B8%EC%B6%9C-%ED%95%AD%EC%9D%98-%EB%B6%80%EC%A0%95%ED%99%95%ED%95%9C-%EC%9D%B8%EC%B6%9C-%EC%8B%9C%EB%8F%84)
      2. [대량 인출 거래에 관한 승인된 항의](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EB%8C%80%EB%9F%89-%EC%9D%B8%EC%B6%9C-%EA%B1%B0%EB%9E%98%EC%97%90-%EA%B4%80%ED%95%9C-%EC%8A%B9%EC%9D%B8%EB%90%9C-%ED%95%AD%EC%9D%98)
   8. [UTXOs의 재활용](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#utxos%EC%9D%98-%EC%9E%AC%ED%99%9C%EC%9A%A9)
   9. [요약](https://github.com/Onther-Tech/plasma-korea/blob/master/5_Multiparty_Off-Chain_State.md#%EC%9A%94%EC%95%BD)
6. [블록체인의 블록체인](https://github.com/Onther-Tech/plasma-korea/blob/master/6_Blockchains_in_Blockchains.md)
   1. [체인 내부에서 펀드 받기](https://github.com/Onther-Tech/plasma-korea/blob/master/6_Blockchains_in_Blockchains.md#%EC%B2%B4%EC%9D%B8-%EB%82%B4%EB%B6%80%EC%97%90%EC%84%9C-%ED%8E%80%EB%93%9C-%EB%B0%9B%EA%B8%B0)
   2. [부모 체인에서 펀드 받기](https://github.com/Onther-Tech/plasma-korea/blob/master/6_Blockchains_in_Blockchains.md#%EB%B6%80%EB%AA%A8-%EC%B2%B4%EC%9D%B8%EC%97%90%EC%84%9C-%ED%8E%80%EB%93%9C-%EB%B0%9B%EA%B8%B0)
   3. [트리에서 웹으로](https://github.com/Onther-Tech/plasma-korea/blob/master/6_Blockchains_in_Blockchains.md#%ED%8A%B8%EB%A6%AC%EC%97%90%EC%84%9C-%EC%9B%B9%EC%9C%BC%EB%A1%9C)
   4. [Mitigating the Block Withholding Problem](https://github.com/Onther-Tech/plasma-korea/blob/master/6_Blockchains_in_Blockchains.md#mitigating-the-block-withholding-problem)
   5. [출금하기](https://github.com/Onther-Tech/plasma-korea/blob/master/6_Blockchains_in_Blockchains.md#%EC%B6%9C%EA%B8%88%ED%95%98%EA%B8%B0)
   6. [확장성](https://github.com/Onther-Tech/plasma-korea/blob/master/6_Blockchains_in_Blockchains.md#%ED%99%95%EC%9E%A5%EC%84%B1)
7. [플라즈마 지분증명](https://github.com/Onther-Tech/plasma-korea/blob/master/7_Plasma_Proof-of-Stake.md)
   1. [나카모토 합의 인센티브](https://github.com/Onther-Tech/plasma-korea/blob/master/7_Plasma_Proof-of-Stake.md#%EB%82%98%EC%B9%B4%EB%AA%A8%ED%86%A0-%ED%95%A9%EC%9D%98-%EC%9D%B8%EC%84%BC%ED%8B%B0%EB%B8%8C)
   2. [간단한 지분증명 모델의 예시](https://github.com/Onther-Tech/plasma-korea/blob/master/7_Plasma_Proof-of-Stake.md#%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%A7%80%EB%B6%84%EC%A6%9D%EB%AA%85-%EB%AA%A8%EB%8D%B8%EC%9D%98-%EC%98%88%EC%8B%9C)
8. [경제적 인센티브](https://github.com/Onther-Tech/plasma-korea/blob/master/8_Economic_Incentives.md)
   1. [토큰 vs 코인과 경제적 보안(Economic Security)](https://github.com/Onther-Tech/plasma-korea/blob/master/8_Economic_Incentives.md#%ED%86%A0%ED%81%B0-vs-%EC%BD%94%EC%9D%B8%EA%B3%BC-%EA%B2%BD%EC%A0%9C%EC%A0%81-%EB%B3%B4%EC%95%88economic-security)
9. [블록체인을 위한 맵리듀스](https://github.com/Onther-Tech/plasma-korea/blob/master/9_%20MapReduce_for_the_Blockchain.md)
10. [어플리케이션 예시](https://github.com/Onther-Tech/plasma-korea/blob/master/10_Example%20Applications.md)
    1. [블록체인 레딧](https://github.com/Onther-Tech/plasma-korea/blob/master/10_Example%20Applications.md#%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%EB%A0%88%EB%94%A7)
    2. [탈중앙화된 거래소](https://github.com/Onther-Tech/plasma-korea/blob/master/10_Example%20Applications.md#%ED%83%88%EC%A4%91%EC%95%99%ED%99%94%EB%90%9C-%ED%99%98%EC%A0%84)
    3. [탈중앙화된 메일](https://github.com/Onther-Tech/plasma-korea/blob/master/10_Example%20Applications.md#%ED%83%88%EC%A4%91%EC%95%99%ED%99%94%EB%90%9C-%EB%A9%94%EC%9D%BC)
    4. [탈중앙화된 CDN](https://github.com/Onther-Tech/plasma-korea/blob/master/10_Example%20Applications.md#%ED%83%88%EC%A4%91%EC%95%99%ED%99%94%EB%90%9C-cdn)
    5. [프라이빗 체인](https://github.com/Onther-Tech/plasma-korea/blob/master/10_Example%20Applications.md#%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97-%EC%B2%B4%EC%9D%B8)
11. [공격과 리스크 그리고 대비책](https://github.com/Onther-Tech/plasma-korea/blob/master/11_Attacks_Risks_and_Mitigations.md)
    1. [스마트 컨트랙트 코드](https://github.com/Onther-Tech/plasma-korea/blob/master/11_Attacks_Risks_and_Mitigations.md#%EC%8A%A4%EB%A7%88%ED%8A%B8-%EC%BB%A8%ED%8A%B8%EB%A0%89%ED%8A%B8-%EC%BD%94%EB%93%9C)
    2. [메인 체인에서 거래 종료(Closing Transaction) 비용이 너무 많이 발생](https://github.com/Onther-Tech/plasma-korea/blob/master/11_Attacks_Risks_and_Mitigations.md#%EB%A9%94%EC%9D%B8-%EC%B2%B4%EC%9D%B8%EC%97%90%EC%84%9C%EC%9D%98-closing-transaction%EC%9D%B4-%EB%84%88%EB%AC%B4-%EB%B9%84%EC%9A%A9%EC%9D%B4-%EB%A7%8E%EC%9D%B4-%EB%B0%9C%EC%83%9D)
    3. [최종성(Finality)](https://github.com/Onther-Tech/plasma-korea/blob/master/11_Attacks_Risks_and_Mitigations.md#%EC%B5%9C%EC%A2%85%EC%84%B1finality)
    4. [루트 체인의 용량 부족 또는 비용 증가](https://github.com/Onther-Tech/plasma-korea/blob/master/11_Attacks_Risks_and_Mitigations.md#%EB%A3%A8%ED%8A%B8-%EC%B2%B4%EC%9D%B8%EC%9D%98-%EC%9A%A9%EB%9F%89-%EB%B6%80%EC%A1%B1-%EB%98%90%EB%8A%94-%EB%B9%84%EC%9A%A9-%EC%A6%9D%EA%B0%80)
    5. [루트 체인 검열 (Censorship)](https://github.com/Onther-Tech/plasma-korea/blob/master/11_Attacks_Risks_and_Mitigations.md#%EB%A3%A8%ED%8A%B8-%EC%B2%B4%EC%9D%B8-%EA%B2%80%EC%97%B4-censorship)
    6. [체인 중단(halt)](https://github.com/Onther-Tech/plasma-korea/blob/master/11_Attacks_Risks_and_Mitigations.md#%EC%B2%B4%EC%9D%B8-%EC%A4%91%EB%8B%A8halt)
    7. [합의 규칙 변경 불가](https://github.com/Onther-Tech/plasma-korea/blob/master/11_Attacks_Risks_and_Mitigations.md#%ED%95%A9%EC%9D%98-%EA%B7%9C%EC%B9%99-%EB%B3%80%EA%B2%BD-%EB%B6%88%EA%B0%80)
12. [향후 연구](https://github.com/Onther-Tech/plasma-korea/blob/master/12_Future_Research.md)
13. [결론 및 요약](https://github.com/Onther-Tech/plasma-korea/blob/master/13_Conclusion_and_Summary.md)
14. [알리는 글](https://github.com/Onther-Tech/plasma-korea/blob/master/14_Acknowledgements.md)
15. [참고문헌](https://github.com/Onther-Tech/plasma-korea/blob/master/References.md)
