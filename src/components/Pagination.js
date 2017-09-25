import React from 'react';
import { Link } from 'react-router'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    const {page, limit, name, cards} = this.props

    return (
      <Pagination size="sm">
        <PaginationItem disabled={(+page - 1) <= 0}>
          <PaginationLink previous href={`#/?page=${+page - 1}&limit=${limit}&name=${name}`} />
        </PaginationItem>

        {(+page) > 2 &&
          <PaginationItem>
            <PaginationLink href={`#/?page=${1}&limit=${limit}&name=${name}`}>
              1
            </PaginationLink>
          </PaginationItem>
        }

        {(+page) > 2 &&
          <PaginationItem disabled className="ml-1 mr-1">
            &hellip;
          </PaginationItem>
        }

        {(+page - 1) > 0 &&
          <PaginationItem disabled={(+page - 1) <= 0}>
            <PaginationLink href={`#/?page=${+page - 1}&limit=${limit}&name=${name}`}>
              {+page - 1}
            </PaginationLink>
          </PaginationItem>
        }

        <PaginationItem active>
          <PaginationLink href={`#/?page=${+page}&limit=${limit}&name=${name}`}>
            {+page}
          </PaginationLink>
        </PaginationItem>

        { !(cards.length < limit) &&
          <PaginationItem>
            <PaginationLink href={`#/?page=${+page + 1}&limit=${limit}&name=${name}`}>
              {+page + 1}
            </PaginationLink>
          </PaginationItem>
        }

        <PaginationItem disabled={cards.length < limit}>
          <PaginationLink next href={`#/?page=${+page + 1}&limit=${limit}&name=${name}`} />
        </PaginationItem>
      </Pagination>
    );
  }
}
