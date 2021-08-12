import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Frame, Cover, Title, Label, Error, Textarea, Button, HeaderAuth as Header, FooterAuth as Footer } from 'ts/component';
import { I, Storage, translate, C } from 'ts/lib';
import { commonStore, authStore } from 'ts/store';
import { observer } from 'mobx-react';

interface Props extends RouteComponentProps<any> {}

const PageAuthNotice = observer(class PageAuthNotice extends React.Component<Props, {}> {

	constructor (props: any) {
		super(props);

		this.onClick = this.onClick.bind(this);
	};
	
	render () {
		const { cover } = commonStore;
		
        return (
			<div>
				<Cover {...cover} />
				<Header />
				<Footer />
				
				<Frame>
					<Title text={translate('authNoticeTitle')} />
					<Label text={translate('authNoticeLabel')} />
							
					<div className="buttons">
						<Button text={translate('authNoticeStart')} onClick={this.onClick} />
					</div>
				</Frame>
			</div>
		);
	};

	onClick (e: any) {
		this.props.history.push('/auth/select');
	};
	
});

export default PageAuthNotice;