import PropTypes from 'prop-types';
import { StatisticsContainer, List, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && (
        <section>
          <Title>{title}</Title>

          <List>
            {stats.map(item => (
              <li key={item.id}>
                <p>{item.label}</p>
                <span>{item.percentage}%</span>
              </li>
            ))}
          </List>
        </section>
      )}
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
