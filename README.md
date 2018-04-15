# 알리는글

번역에 힘써준 jenny kang(jenny.k@onther.io)에게 감사의 말을 전합니다.

# 플라즈마 백서 번역

온더(Onther Inc.)에서 번역한 플라즈마 백서입니다.
아직 초안이며, 수정 및 보완검토가 필요합니다. 이슈와 pull request를 통해 더 나은 번역이 될 수 있도록 많은 참여 부탁드립니다.

원본링크 : https://plasma.io/plasma.pdf

# 용어통일

* root blockchain (root chain) / parent blockchain (parent chain)
: 루트 블록체인 / 부모 블록체인 / 상위 블록체인
하위 체인의 상태를 기록하는 상위 블록체인을 의미하며 플라즈마의 화이트 페이퍼에서는 대부분 이더리움을 지칭한다.

* child blockchian (child chain) : 자식 블록체인
상위 블록체인에 상태를 기록하는 하위 블록체인을 의미한다.

* Proof-of-Stake : 지분 증명
* fraud proof : 사기 증명 / 위조 증명
* chain tip : 체인의 끝/마지막
* fidelity bonds : https://www.investopedia.com/terms/f/fidelity-bond.asp
* decentralized : 탈중앙화
* Censorship : 검열


# 목차

* 요약(abstract)

1. 확장성 높은 다중 연산
2. 플라즈마
   1. 플라즈마 블록체인 또는 표면화된 멀티파티 채널(Externalized Multiparty Channels)
   2. 블록체인의 집행 가능한 블록체인
   3. Plasma 지분 증명 (proof-of-stake)
   4. 2.4 MapReduce로서의 블록체인
   5. 영구적으로 탈중앙화 되어있고 자율적인 블록체인의 경제적 인센티브에 대한 설명
3. 디자인 스텍과 스마트 컨트렉트
   1. 샤딩에서 가장 중요한 문제는 정보
4. 관련연구
5. 다중 오프체인 상태
   1. 위조증명
   2. 입금(deposit)
   3. 거액 인출과 비트맵 방식의 상태
   4. 상태변화
   5. 루트 체인의 주기적인 이행
   6. 인출
      1. 단순 인출
      2. 빠른 인출
   7. 적대적 대량 인출
      1. 대량 인출 항의 : 부정확한 인출 시도
      2. 대량 인출 거래에 관한 승인된 항의
   8. UTXOs의 재활용
   9. 요약
6. 블록체인의 블록체인
   1. 체인 내부에서 펀드 받기
   2. 부모 체인에서 펀드 받기
   3. 트리에서 웹으로
   4. Mitigating the Block Withholding Problem
   5. 출금하기
   6. 확장성
7. 플라즈마 지분증명
   1. 나카모토 합의 인센티브
   2. 간단한 지분증명 모델의 예시
8. 경제적 인센티브
   1. 토큰 vs 코인과 경제적 보안(Economic Security)
9. 블록체인을 위한 맵리듀스
10. 어플리케이션 예시
    1. 블록체인 레딧
    2. 탈중앙화된 환전
    3. 탈중앙화된 메일
    4. 탈중앙화된 CDN
    5. 프라이빗 체인
11. 공격과 리스크 그리고 대비책
    1. 스마트 컨트렉트 코드
    2. 메인 체인에서의 Closing Transaction이 너무 비용이 많이 발생
    3. 최종성(Finality)
    4. 루트 체인의 용량 부족 또는 비용 증가
    5. 루트 체인 검열 (Censorship)
    6. 체인 중단(halt)
    7. 합의 규칙 변경 불가
12. 향후 연구
13. 결론 및 요약
14. 알리는글
15. 참고문헌
