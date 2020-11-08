import { NavContainer, PaginationItem } from '@/styles/components/pagination'

interface IPaginationProps {
  totalOfItems: number
  itemsPerPage: number
  onChange: (page: number) => void
}

const Pagination = ({
  totalOfItems,
  itemsPerPage,
  onChange
}: IPaginationProps): JSX.Element => {
  const pagesArray = []
  const totalOfPages = totalOfItems / itemsPerPage

  for (let i = 0; i < totalOfPages; i++) {
    pagesArray.push(i)
  }

  return (
    <NavContainer>
      <ul>
        {pagesArray &&
          pagesArray?.map(page => (
            <li key={page}>
              <PaginationItem onClick={() => onChange(page + 1)}>
                {page + 1}
              </PaginationItem>
            </li>
          ))}
      </ul>
    </NavContainer>
  )
}

export default Pagination
