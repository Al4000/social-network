import React, {useState} from 'react'
import cl from './Users.module.css'
import Button from '@material-ui/core/Button'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, pagiSize = 10}) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let pagiCount = Math.ceil(pagesCount / pagiSize)
	let [pagiNumber, setPagiNumber] = useState(1)
	let leftPagi = (pagiNumber - 1) * pagiSize + 1
	let rightPagi = pagiNumber * pagiSize

	return (
		<div className={cl.pagination}>
			{ pagiNumber > 1 &&
				<Button
					className={cl.pagi_button}
					variant="contained"
					color="primary"
					onClick={() => setPagiNumber(pagiNumber - 1)}
				>
					Prev {pagiSize}
				</Button>
			}
			{
				pages
					.filter(page => page >= leftPagi && page <= rightPagi)
					.map(page =>
					<span
						key={page}
						className={`${currentPage === page ? cl.pagi_active : ''} ${cl.pagi}`}
						onClick = {() => onPageChanged(page)}
					>{page}</span>
				)
			}
			{ pagiCount > pagiNumber &&
				<Button
					className={cl.pagi_button}
					variant="contained"
					color="primary"
					onClick={() => setPagiNumber(pagiNumber + 1)}
				>
					Next {pagiSize}
				</Button>
			}
		</div>
	)
}

export default Paginator