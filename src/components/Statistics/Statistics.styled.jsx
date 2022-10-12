import styled from '@emotion/styled';

export const StaticticsSection = styled.section`
  border: 1px solid #616858;
  border-radius: 5px;
  background-color: #f3ebeb;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const StaticticsSectionTitle = styled.h2`
  margin: 10px 0;
  `;
export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  min-width: 300px;
  border-top: 1px solid #616858;
`;
export const StatisticsListItem = styled.li`
  flex-basis: 100%;
  padding: 10px 0;
  background-color: ${props => props.color};
  color: #f8f8f8;
`;
export const StatisticsItemLabel = styled.span`
  display: block;
`;
export const StatisticsItemPercentage = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  display: block;
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}