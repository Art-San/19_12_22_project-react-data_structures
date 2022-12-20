import React from 'react'
import Title from 'app/components/common/typografy/title'
import Text from 'app/components/common/typografy/text'
import Br from 'app/components/common/br'
import { CodeBlock, dracula } from 'react-code-blocks'
import {
    arrayExample,
    exampleDenormalization,
    exampleNormalization,
    discount,
    discountUser,
    memoizeData
} from './examples'
import SmallTitle from 'app/components/common/typografy/smallTitle'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import diagram1 from 'app/assets/img/diagrams/DeNormalized.jpg'
import diagram2 from 'app/assets/img/diagrams/Normalized.jpg'
const NormaDenorma = () => {
    return (
        <>
            <Title>Нормализация/Денормализация</Title>
            <Text>
                Для того чтобы понять,
                что такое нормализация и денормализация,
                нужно ввести несколько понятий.
            </Text>
            <Br/>
            <Text>
                <strong>Избыточность данных</strong>— это условие,
                создаваемое в базе данных или технологии хранения данных,
                при котором один и тот же фрагмент данных хранится
                в двух и более местах. Это может означать два разных поля
                в одной базе данных или два разных места
                в нескольких программных средах или платформах.
                Всякий раз, когда данные повторяются,
                это представляет собой избыточность данных.
            </Text>
            <br/>
            <Text>
                Например мы можем хранить подобный массив в нашей программе:
            </Text>
            <br/>
            <CodeBlock
                text={arrayExample}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <br/>
            <Text>
                В данном массиве находится список заказов и внутри есть товары.
                В обоих заказах есть один и тот же товар, но он повторяется в двух местах.
                Такой подход можно назвать избыточным (в контексте JS за место одной
                ссылки на объект с товаром, мы храним два разных объекта).
            </Text>
            <br/>
            <Text>
                Следующие понятие — согласованность данных. <strong>Согласованность данных</strong>
                 -означает, совпадают ли одни и те же данные, хранящиеся в разных местах.
            </Text>
            <br/>
            <Text>
                В нашем случае, если бы мы захотели, например,
                изменить цену, нам нужно было бы следить за тем,
                чтобы цена изменилась в обоих местах. Например,
                наш пользователь — менеджер сайта, и он хочет дать
                скидку клиенту на его неоплаченные заказы.
                Если бы он делал это и цена менялась во всех заказах,
                то это бы и означало согласованность данных.
            </Text>
            <br/>
            <Text>
                Теперь мы разберёмся, какие есть методы проектирования баз данных,
                а именно узнаем, что такое нормализация и денормализация.
                Начнём с денормализации, так как она чаще встречается во фронтенде
                в качестве структуры данных при ответах с сервера по API.
            </Text>
            <SmallTitle>Денормализация</SmallTitle>
            <Text>
                Денормализация — это метод, который используется при проектировании в базе данных.
                Он используется для добавления избыточности для быстрого выполнения запроса.
                Этот метод, при котором данные объединяются. Он обладает характеристиками:
            </Text>
            <SmallTitle>Характеристики</SmallTitle>
            <Stack
                direction="row"
                spacing={1}
                style={{ margin: '10px 0 20px' }}
            >
                <Chip
                    label="Скорость обработки запроса"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: 'green' }} />}
                />
                <Chip
                    label="Количество сущностей"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: 'green' }} />}
                />
                <Chip
                    label="Избыточность данных"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: 'red' }} />}
                />
                <Chip
                    label="Согласованность данных"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: 'red' }} />}
                />
            </Stack>
            <SmallTitle>Пример</SmallTitle>
            <CodeBlock
                text={exampleDenormalization}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <Text>
                У нас есть заказ, у которого есть способ доставки,
                адрес доставки и прочие данные. Обычно служба доставки
                и адрес — это данные, которые являются справочными
                и редко меняются. Но если мы хотим отобразить конкретный
                оформленный заказ конкретному пользователю, то ему нужна
                только информация о его заказе и не нужны все существующие
                варианты адресов и доставок. Поэтому мы будем запрашивать
                из хранилища данных только адрес в этом заказе, т. е.
                денормализованные данные. В данном случае денормализация
                совершенно оправдана.
            </Text>
            <br/>
            <Text>
                Но что, если бы мы работали от лица, например, аналитика в интернет-магазине,
                и мы бы хотели получить список заказов, у которых одна и та же служба доставки?
                Нам совершенно не нужно было бы хранить множество раз одну и ту же доставку в сущности заказа.
                Для решения такой задача к нам приходит второй метод проектирования структуры данных — нормализация.
            </Text>
            <SmallTitle>Нормализация</SmallTitle>
            <Text>Нормализация — это метод, используемый в базе данных
                для уменьшения избыточности и несогласованности данных.
                Это метод, при котором данные без избыточности
                и непротиворечивости хранятся в установленной схеме.
            </Text>
            <SmallTitle>Характеристики</SmallTitle>
            <Stack
                direction="row"
                spacing={1}
                style={{ margin: '10px 0 20px' }}
            >
                <Chip
                    label="Скорость обработки запроса"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: 'red' }} />}
                />
                <Chip
                    label="Количество сущностей"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: 'red' }} />}
                />
                <Chip
                    label="Избыточность данных"
                    variant="outlined"
                    icon={<KeyboardArrowDownIcon style={{ color: 'green' }} />}
                />
                <Chip
                    label="Согласованность данных"
                    variant="outlined"
                    icon={<KeyboardArrowUpIcon style={{ color: 'green' }} />}
                />
            </Stack>
            <SmallTitle>Пример</SmallTitle>
            <CodeBlock
                text={exampleNormalization}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <Text>
                Мы видим, что у нас заказы и службы доставки разделились
                на разные сущности: заказ и доставка.
            </Text>
            <br/>
            <Text>
                Сущность “заказ” имеет указатель в виде shipmentTypeId на службу доставки.
                Если бы такой запрос обрабатывался на сервере, то сначала были бы запрошены заказы,
                собраны идентификаторы служб доставок, и был бы выполнен ещё один запрос за службами доставки.
            </Text>
            <br/>
            <Text>
                Для наглядности можно представить схематически,
                как происходили бы обращения к базе данных в случае с денормализацией или нормализацией:
            </Text>
            <SmallTitle>Денормализация</SmallTitle>
            <img
                src={diagram1}
                style={{
                    width: '100%',
                    borderRadius: '10px'
                }}
            />
            <SmallTitle>Нормализация</SmallTitle>
            <img
                src={diagram2}
                style={{
                    width: '100%',
                    borderRadius: '10px'
                }}
            />
            <br/>
            <Text>
                На этих схемах наглядно видно разницу между нормализацией
                и денормализацией в контексте обращения к данным в хранилище.
            </Text>
            <br/>
            <SmallTitle>Спойлер</SmallTitle>
            <Text>
                Возможно ты знаком с реляционными базами данных (например MySQL).
                При проектировании таких баз данных используют нормализацию.
                Однако часто нам нужно быстро получать денормализованные данные.
                Например у нас есть страница списка товаров (в интернет-магазине),
                в котором данные запрашиваются из разных таблиц БД, и при этом
                у нас происходят тысячи запросов. В Backend для решения таких задач
                используют кэш или другую базу данных, например Redis, просто запомнив
                для определённого id сущности результат запроса из базы данных.
            </Text>
            <br/>
            <Text>
                Если наше хранилище данных в React использует нормализацию (как, например,
                советует Redux), то мы можем подобным способом,
                как на Backend, проводить денормализацию и “кэшировать” с помощью мемоизации.
                В React мемоизацию в данном контексте можно назвать кэшированием. Например,
                у нас существует кабинет менеджера интернет-магазина. У него есть хранилище,
                в котором есть справочники с доступными скидками:
            </Text>
            <br/>
            <CodeBlock
                text={discount}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <br/>
            <Text>
                В какой-то момент этот менеджер начинает работать
                с заказом какого-то пользователя, у которого есть скидка:
            </Text>
            <br/>
            <CodeBlock
                text={discountUser}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <br/>
            <Text>
                При отображении в кабинете мы хотим показывать менеджеру скидку
                в виде текста, и при этом не хотим каждый раз проходиться
                по массиву словаря скидок, чтобы найти нужное значение.
                Мы можем мемоизировать данные, которые нам нужны для отображения в кабинете:
            </Text>
            <br/>
            <CodeBlock
                text={memoizeData}
                language="js"
                theme={dracula}
                wrapLines={true}
            />
            <br/>
            <Text>
                В переменной pageData мы получили мемоизированный объект
                с денормализованными данными о заказе
                (вместо discountId будет сразу discountTitle):
            </Text>

        </>
    )
}

export default NormaDenorma
